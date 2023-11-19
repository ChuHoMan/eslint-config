import { FlatESLintConfigItem, Rules } from 'eslint-define-config';
import { pluginReact, pluginReactHooks } from '../plugins';
import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs';

const reactRules: Rules = {
  ...pluginReact.configs.recommended.rules,
  ...pluginReactHooks.configs.recommended.rules,
};

export function react(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        'react': pluginReact,

        'react-hooks': pluginReactHooks,
      },
    },
    {
      files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          parser: '@typescript-eslint/parser',
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...reactRules,

        // basic
        'no-case-declarations': 'off',
        'no-console': 'warn',
        'no-tabs': ['error', { allowIndentationTabs: true }],
        // 影响 json 内有标签 e.g. '<code>test</code>'
        'no-template-curly-in-string': 'off',

        // react
        'jsx-quotes': ['error', 'prefer-double'],
      },
      settings: {
        react: {
          version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
      },
    },
  ];
}
