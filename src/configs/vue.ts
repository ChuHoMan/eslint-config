import process from 'node:process';
import { getPackageInfoSync } from 'local-pkg';
import { FlatESLintConfigItem, Rules } from 'eslint-define-config';
import type { OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from '../types';
import { GLOB_VUE } from '../globs';
import { parserTs, parserVue, pluginVue } from '../plugins';

export function getVueVersion() {
  const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] });
  if (
    pkg
      && typeof pkg.version === 'string'
      && !Number.isNaN(+pkg.version[0])
  ) {
    return +pkg.version[0];
  }

  return 3;
}
const isVue3 = getVueVersion() === 3;

const vue3Rules: Rules = {
  ...pluginVue.configs.base.rules as any,
  ...pluginVue.configs['vue3-essential'].rules as any,
  ...pluginVue.configs['vue3-strongly-recommended'].rules as any,
  ...pluginVue.configs['vue3-recommended'].rules as any,
};

const vue2Rules: Rules = {
  ...pluginVue.configs.base.rules as any,
  ...pluginVue.configs.essential.rules as any,
  ...pluginVue.configs['strongly-recommended'].rules as any,
  ...pluginVue.configs.recommended.rules as any,
};

export function vue(options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {}): FlatESLintConfigItem[] {
  const {
    overrides = {},
    stylistic = true,
  } = options;

  const {
    indent = 2,
  } = typeof stylistic === 'boolean' ? {} : stylistic;

  return [
    {
      plugins: {
        vue: pluginVue,
      },
    },
    {
      files: [GLOB_VUE],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: options.typescript ? parserTs as any : null,
          sourceType: 'module',
        },
      },
      processor: pluginVue.processors['.vue'],
      rules: {
        ...(isVue3 ? vue3Rules : vue2Rules),

        'vue/max-attributes-per-line': ['error', {
          singleline: {
            max: 4,
          },
          multiline: {
            max: 1,
          },
        }],
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/prefer-import-from-vue': 'off',
        'vue/multi-word-component-names': 'off',

        // I don't use reactivity transform by default
        'vue/no-setup-props-destructure': 'error',

        'vue/component-tags-order': ['error', {
          order: ['script', 'template', 'style'],
        }],
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
          registeredComponentsOnly: true,
          ignores: [],
        }],
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/define-macros-order': ['error', {
          order: ['defineProps', 'defineEmits'],
        }],
        'vue/no-restricted-v-bind': ['error', '/^v-/'],
        'vue/no-useless-v-bind': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/prefer-separate-static-class': 'error',

        'node/prefer-global/process': 'off',

        'vue/block-order': ['error', {
          order: ['script', 'template', 'style'],
        }],

        'vue/html-indent': ['error', indent],
        'vue/html-quotes': ['error', 'double'],
        'vue/no-dupe-keys': 'off',
        'vue/no-setup-props-reactivity-loss': 'off',
        'vue/no-unused-refs': 'error',
        'vue/prop-name-casing': ['error', 'camelCase'],

        ...stylistic
          ? {
              'vue/array-bracket-spacing': ['error', 'never'],
              'vue/arrow-spacing': ['error', { before: true, after: true }],
              'vue/block-spacing': ['error', 'always'],
              'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
              'vue/comma-dangle': ['error', 'always-multiline'],
              'vue/comma-spacing': ['error', { before: false, after: true }],
              'vue/comma-style': ['error', 'last'],
              'vue/dot-location': ['error', 'property'],
              'vue/dot-notation': ['error', { allowKeywords: true }],
              'vue/eqeqeq': ['error', 'smart'],
              'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
              'vue/keyword-spacing': ['error', { before: true, after: true }],
              'vue/no-constant-condition': 'warn',
              'vue/no-empty-pattern': 'error',
              'vue/no-extra-parens': ['error', 'functions'],
              'vue/no-irregular-whitespace': 'error',
              'vue/no-loss-of-precision': 'error',
              'vue/no-restricted-syntax': [
                'error',
                'DebuggerStatement',
                'LabeledStatement',
                'WithStatement',
              ],
              'vue/no-sparse-arrays': 'error',
              'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
              'vue/object-curly-spacing': ['error', 'always'],
              'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
              'vue/object-shorthand': [
                'error',
                'always',
                {
                  ignoreConstructors: false,
                  avoidQuotes: true,
                },
              ],
              'vue/operator-linebreak': ['error', 'before'],
              'vue/prefer-template': 'error',
              'vue/quote-props': ['error', 'consistent-as-needed'],
              'vue/space-in-parens': ['error', 'never'],
              'vue/space-infix-ops': 'error',
              'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
              'vue/template-curly-spacing': 'error',
              'vue/block-tag-newline': ['error', {
                singleline: 'always',
                multiline: 'always',
              }],
              'vue/html-comment-content-spacing': ['error', 'always', {
                exceptions: ['-'],
              }],
              'vue/padding-line-between-blocks': ['error', 'always'],
            }
          : {},

        ...overrides,
      },
    },
  ];
}
