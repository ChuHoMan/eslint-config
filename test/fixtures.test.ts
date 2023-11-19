import { join, resolve } from 'node:path';
import { afterAll, beforeAll, it } from 'vitest';
import fs from 'fs-extra';
import { execa } from 'execa';
import fg from 'fast-glob';
import { FlatESLintConfigItem } from 'eslint-define-config';
import type { OptionsConfig } from '../src/types';

beforeAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true });
});
afterAll(async () => {
  await fs.rm('_fixtures', { recursive: true, force: true });
});

runWithConfig('tsx', {
  typescript: true,
  react: true,
  stylistic: {
    jsx: false,
  },
}, {
  rules: {
    // 'style/jsx-closing-tag-location': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
  },
});

function runWithConfig(name: string, configs: OptionsConfig, ...items: FlatESLintConfigItem[]) {
  it.concurrent(name, async ({ expect }) => {
    const from = resolve('fixtures/input');
    const output = resolve('fixtures/output', name);
    const target = resolve('_fixtures', name);

    await fs.copy(from, target, {
      filter: (src: string[]) => {
        return !src.includes('node_modules');
      },
    });
    await fs.writeFile(join(target, 'eslint.config.cjs'), `
// @eslint-disable
const { chuhoman } = require('@chuhoman/eslint-config');

module.exports = chuhoman(
  ${JSON.stringify(configs)},
  ...${JSON.stringify(items) ?? []},
)
  `);

    await execa('npx', ['eslint', '.', '-c', 'eslint.config.cjs', '--fix'], {
      cwd: target,
      stdio: 'pipe',
    });

    const files = await fg('**/*', {
      ignore: [
        'node_modules',
        'eslint.config.cjs',
      ],
      cwd: target,
    });

    await Promise.all(files.map(async (file) => {
      let content = await fs.readFile(join(target, file), 'utf-8');
      const source = await fs.readFile(join(from, file), 'utf-8');
      if (content === source) {
        content = '// unchanged\n';
      };
      await expect.soft(content).toMatchFileSnapshot(join(output, file));
    }));
  }, 30_000);
}
