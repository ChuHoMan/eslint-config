import type { FlatESLintConfigItem } from 'eslint-define-config';
import { pluginImport } from '../plugins';
import { OptionsStylistic } from '../types';

export function imports(options: OptionsStylistic = {}): FlatESLintConfigItem[] {
  const {
    stylistic = true,
  } = options;

  return [
    {
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/namespace': 'off',
        'import/export': 'error',
        'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
        'import/no-duplicates': 'error',
        'import/no-named-default': 'error',
        'import/no-webpack-loader-syntax': 'error',

        ...stylistic
          ? {
              'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
            }
          : {},
      },
    },
  ];
}
