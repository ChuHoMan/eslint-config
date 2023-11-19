import process from 'node:process';
import { FlatESLintConfigItem } from 'eslint-define-config';
import type { OptionsComponentExts, OptionsOverrides, OptionsTypeScriptParserOptions, OptionsTypeScriptWithTypes } from '../types';
import { GLOB_SRC } from '../globs';
import { parserTs, pluginImport, pluginTs } from '../plugins';
import { renameRules, toArray } from '../utils';

export function typescript(options?: OptionsComponentExts & OptionsOverrides & OptionsTypeScriptWithTypes & OptionsTypeScriptParserOptions): FlatESLintConfigItem[] {
  const {
    componentExts = [],
    overrides = {},
    parserOptions = {},
  } = options ?? {};

  const typeAwareRules: FlatESLintConfigItem['rules'] = {
    'dot-notation': 'off',
    'no-implied-eval': 'off',
    'no-throw-literal': 'off',
    'ts/await-thenable': 'error',
    'ts/dot-notation': ['error', { allowKeywords: true }],
    'ts/no-floating-promises': 'error',
    'ts/no-for-in-array': 'error',
    'ts/no-implied-eval': 'error',
    'ts/no-throw-literal': 'error',
    'ts/no-unsafe-argument': 'error',
    'ts/no-unsafe-assignment': 'error',
    'ts/no-unsafe-call': 'error',
    'ts/no-unsafe-member-access': 'error',
    'ts/no-unsafe-return': 'error',
    'ts/restrict-plus-operands': 'error',
    'ts/restrict-template-expressions': 'error',
  };

  const tsconfigPath = options?.tsconfigPath
    ? toArray(options.tsconfigPath)
    : undefined;

  return [
    {
      // Install the plugins without globs, so they can be configured separately.
      plugins: {
        import: pluginImport,
        ts: pluginTs as any,
      },
    },
    {
      files: [
        GLOB_SRC,
        ...componentExts.map(ext => `**/*.${ext}`),
      ],
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: componentExts.map(ext => `.${ext}`),
          sourceType: 'module',
          ...tsconfigPath
            ? {
                project: tsconfigPath,
                tsconfigRootDir: process.cwd(),
              }
            : {},
          ...parserOptions as any,
        },
      },
      rules: {
        ...renameRules(
          pluginTs.configs['eslint-recommended'].overrides![0].rules!,
          '@typescript-eslint/',
          'ts/',
        ),
        ...renameRules(
          pluginTs.configs.strict.rules!,
          '@typescript-eslint/',
          'ts/',
        ),

        'ts/adjacent-overload-signatures': 'error',
        'ts/array-type': 'off',
        'ts/ban-ts-comment': 'error',
        'ts/ban-tslint-comment': 'error',
        'ts/ban-types': 'error',
        'ts/class-literal-property-style': ['error', 'fields'],
        'ts/consistent-indexed-object-style': 'off',
        'ts/consistent-type-assertions': ['warn', {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        }],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/consistent-type-imports': 'off',
        'ts/explicit-function-return-type': ['off'],
        'ts/explicit-member-accessibility': ['error', {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        }],
        'ts/explicit-module-boundary-types': 'off',
        'ts/member-delimiter-style': ['error', {
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
        'ts/member-ordering': ['error', {
          classExpressions: ['public-instance-method', 'public-static-field'],
        }],
        'ts/method-signature-style': ['error', 'method'],
        'ts/no-base-to-string': 'off',
        'ts/no-confusing-non-null-assertion': 'error',
        'ts/no-confusing-void-expression': 'off',
        'ts/no-dynamic-delete': 'off',
        'ts/no-empty-interface': 'error',
        'ts/no-explicit-any': 'off',
        'ts/no-extra-non-null-assertion': 'error',
        'ts/no-extraneous-class': 'off',
        'ts/no-for-in-array': 'error',
        'ts/no-implicit-any-catch': 'off',
        'ts/no-inferrable-types': ['error', {
          ignoreParameters: false,
          ignoreProperties: false,
        }],
        'ts/no-invalid-void-type': 'error',
        'ts/no-misused-new': 'error',
        'ts/no-namespace': ['error', {
          allowDeclarations: true,
        }],
        'ts/no-non-null-asserted-optional-chain': 'error',
        'ts/no-non-null-assertion': 'off',

        // 'ts/no-parameter-properties': ['error'],

        'ts/no-require-imports': 'error',
        'ts/no-this-alias': ['error', {
          allowDestructuring: true,
        }],
        'ts/no-type-alias': 'off',
        'ts/no-unnecessary-condition': 'off',
        'ts/no-unnecessary-qualifier': 'off',
        'ts/no-unnecessary-type-arguments': 'off',
        'ts/no-unnecessary-type-constraint': 'error',
        'ts/no-unsafe-assignment': 'off',
        'ts/no-unsafe-call': 'off',
        'ts/no-unsafe-member-access': 'off',
        'ts/no-unsafe-return': 'off',
        'ts/no-var-requires': 'off',
        'ts/prefer-as-const': 'error',
        'ts/prefer-enum-initializers': 'off',
        'ts/prefer-for-of': 'error',
        'ts/prefer-function-type': 'error',
        'ts/prefer-includes': 'off',
        'ts/prefer-literal-enum-member': 'error',
        'ts/prefer-namespace-keyword': 'error',
        'ts/prefer-nullish-coalescing': 'off',
        'ts/prefer-readonly': 'off',
        'ts/prefer-readonly-parameter-types': 'off',
        'ts/prefer-reduce-type-parameter': 'off',
        'ts/prefer-regexp-exec': 'off',
        'ts/prefer-string-starts-ends-with': 'off',
        'ts/prefer-ts-expect-error': 'error',
        'ts/promise-function-async': 'off',
        'ts/require-array-sort-compare': 'off',
        'ts/restrict-plus-operands': 'off',
        'ts/restrict-template-expressions': 'off',
        'ts/sort-type-union-intersection-members': 'off',
        'ts/strict-boolean-expressions': 'off',
        'ts/switch-exhaustiveness-check': 'off',
        'ts/triple-slash-reference': 'error',
        'ts/type-annotation-spacing': ['error', {}],
        'ts/typedef': ['error', {
          arrayDestructuring: false,
          arrowParameter: false,
          memberVariableDeclaration: false,
          objectDestructuring: false,
          parameter: false,
          propertyDeclaration: true,
          variableDeclaration: false,
          variableDeclarationIgnoreFunction: false,
        }],
        'ts/unified-signatures': 'error',
        'no-array-constructor': 'off',
        'ts/no-array-constructor': 'off',
        'ts/no-empty-function': 'off',
        'ts/no-implied-eval': 'off',
        'no-unused-vars': 'off',
        'ts/no-unused-vars': 'off',
        'ts/require-await': 'off',

        // off
        // 'ts/unbound-method': ['error', {
        //   ignoreStatic: true,
        // }],
        // 'ts/prefer-optional-chain': 'error',
        // 'ts/non-nullable-type-assertion-style': 'error',
        // 'ts/no-unnecessary-type-assertion': 'error',
        // 'ts/no-unnecessary-boolean-literal-compare': ['error', {
        //   allowComparingNullableBooleansToTrue: false,
        //   allowComparingNullableBooleansToFalse: false,
        // }],
        // 'ts/no-misused-promises': ['error', {
        //   checksConditionals: true,
        //   checksVoidReturn: true,
        // }],
        // 'ts/no-floating-promises': ['error', {
        //   ignoreVoid: false,
        // }],
        // 'ts/naming-convention': ['error', {
        //   selector: ['variable', 'function', 'objectLiteralMethod', 'parameterProperty', 'classProperty'],
        //   format: ['strictCamelCase', 'UPPER_CASE'],
        //   leadingUnderscore: 'allow',
        //   trailingUnderscore: 'allow',
        // }],

        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          },
        ],

        'no-dupe-class-members': 'off',
        'no-invalid-this': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'ts/no-dupe-class-members': 'error',
        'ts/no-import-type-side-effects': 'error',
        'ts/no-invalid-this': 'error',
        'ts/no-loss-of-precision': 'error',
        'ts/no-redeclare': 'error',
        'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'ts/no-useless-constructor': 'off',

        ...tsconfigPath ? typeAwareRules : {},
        ...overrides,
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.ts?(x)'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        'ts/no-require-imports': 'off',
        'ts/no-var-requires': 'off',
      },
    },
  ];
}
