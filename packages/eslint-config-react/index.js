const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@chuhoman/eslint-config-typescript',
  ],
  rules: {
    // basic
    'no-case-declarations': 'off',
    'no-console': 'warn',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    // 影响 json 内有标签 e.g. '<code>test</code>'
    'no-template-curly-in-string': 'off',

    // react
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    
    // ts
    '@typescript-eslint/explicit-member-accessibility': 'off'
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
});
