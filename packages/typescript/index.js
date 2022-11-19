const { defineConfig } = require('eslint-define-config');
const basic = require('@chuhoman/eslint-config-basic');

module.exports = defineConfig({
  parser: '@typescript-eslint/parser',

  extends: [
    '@chuhoman/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],

  overrides: basic.overrides,

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },

  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      },
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    '@typescript-eslint/member-ordering': ['error', {
      classExpressions: ['public-instance-method', 'public-static-field'],
    }],
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreParameters: false,
      ignoreProperties: false,
    }],
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': ['error', {
      allowDeclarations: true,
    }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': ['error'],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': ['error', {
      allowDestructuring: true,
    }],
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
    }],
    '@typescript-eslint/typedef': ['error', {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: true,
      variableDeclaration: false,
      variableDeclarationIgnoreFunction: false,
    }],
    '@typescript-eslint/unified-signatures': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/require-await': 'off',

    // off
    // '@typescript-eslint/unbound-method': ['error', {
    //   ignoreStatic: true,
    // }],
    // '@typescript-eslint/prefer-optional-chain': 'error',
    // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', {
    //   allowComparingNullableBooleansToTrue: false,
    //   allowComparingNullableBooleansToFalse: false,
    // }],
    // '@typescript-eslint/no-misused-promises': ['error', {
    //   checksConditionals: true,
    //   checksVoidReturn: true,
    // }],
    // '@typescript-eslint/no-floating-promises': ['error', {
    //   ignoreVoid: false,
    // }],
    // '@typescript-eslint/naming-convention': ['error', {
    //   selector: ['variable', 'function', 'objectLiteralMethod', 'parameterProperty', 'classProperty'],
    //   format: ['strictCamelCase', 'UPPER_CASE'],
    //   leadingUnderscore: 'allow',
    //   trailingUnderscore: 'allow',
    // }],

    // import
    'import/order': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
});
