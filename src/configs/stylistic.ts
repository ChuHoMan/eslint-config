import { FlatESLintConfigItem } from 'eslint-define-config';
import type { StylisticConfig } from '../types';
import { pluginStylistic } from '../plugins';

export function stylistic(options: StylisticConfig = {}): FlatESLintConfigItem[] {
  const {
    indent = 2,
    jsx = true,
    quotes = 'single',
  } = options;

  return [
    {
      plugins: {
        style: pluginStylistic,
      },
      rules: {
        'curly': ['error', 'all'],

        // Common
        'style/semi': ['error', 'always'],
        'style/quotes': ['error', quotes, { allowTemplateLiterals: true, avoidEscape: false }],
        'style/quote-props': ['error', 'consistent-as-needed'],
        'style/no-param-reassign': 'off',
        'style/array-bracket-spacing': ['error', 'never'],
        'style/brace-style': ['error', '1tbs'],
        'style/block-spacing': ['error', 'always'],
        'style/camelcase': 'off',
        'style/comma-spacing': ['error', { before: false, after: true }],
        'style/comma-style': ['error', 'last'],
        'style/comma-dangle': ['error', 'always-multiline'],
        'style/func-call-spacing': ['off', 'never'],
        'style/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'style/indent': ['error', indent, {
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          flatTernaryExpressions: false,
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          ignoreComments: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
          ],
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          offsetTernaryExpressions: true,
          outerIIFEBody: 1,
          SwitchCase: 1,
          VariableDeclarator: 1,
        }],
        'style/object-curly-spacing': ['error', 'always'],
        // 强制在 function的左括号之前使用一致的空格
        'style/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'style/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
        // 强制在函数括号内使用一致的换行
        'style/function-paren-newline': ['error'],
        'style/consistent-return': 'off',
        'style/complexity': ['off', 11],
        'style/no-multi-spaces': 'error',
        'style/no-useless-escape': 'off',
        'style/require-await': 'off',
        'style/no-return-assign': 'off',
        'style/operator-linebreak': ['error', 'before'],

        'style/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'style/arrow-spacing': ['error', { after: true, before: true }],
        'style/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
        'style/dot-location': ['error', 'property'],
        'style/eol-last': 'error',
        'style/keyword-spacing': ['error', { after: true, before: true }],
        'style/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'style/max-statements-per-line': ['error', { max: 1 }],
        'style/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        'style/multiline-ternary': ['error', 'always-multiline'],
        'style/new-parens': 'error',
        'style/no-extra-parens': ['error', 'functions'],
        'style/no-floating-decimal': 'error',
        'style/no-mixed-operators': ['error', {
          allowSamePrecedence: true,
          groups: [
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
        }],
        'style/no-mixed-spaces-and-tabs': 'error',
        'style/no-tabs': indent === 'tab' ? 'off' : 'error',
        'style/no-trailing-spaces': 'error',
        'style/no-whitespace-before-property': 'error',
        'style/padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],
        'style/rest-spread-spacing': ['error', 'never'],
        'style/semi-spacing': ['error', { after: true, before: false }],
        'style/space-before-blocks': ['error', 'always'],
        'style/space-in-parens': ['error', 'never'],
        'style/space-infix-ops': 'error',
        'style/space-unary-ops': ['error', { nonwords: false, words: true }],
        'style/spaced-comment': ['error', 'always', {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['!'],
          },
          line: {
            exceptions: ['/', '#'],
            markers: ['/'],
          },
        }],
        'style/template-curly-spacing': 'error',
        'style/template-tag-spacing': ['error', 'never'],
        'style/type-annotation-spacing': ['error', {}],
        'style/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
        'style/yield-star-spacing': ['error', 'both'],

        ...jsx
          ? {
              'style/jsx-closing-bracket-location': 'error',
              'style/jsx-closing-tag-location': 'error',
              'style/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
              'style/jsx-curly-newline': 'error',
              'style/jsx-curly-spacing': ['error', 'never'],
              'style/jsx-equals-spacing': 'error',
              'style/jsx-first-prop-new-line': 'error',
              'style/jsx-indent': ['error', indent, { checkAttributes: true, indentLogicalExpressions: true }],
              'style/jsx-indent-props': ['error', indent],
              'style/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
              'style/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
              'style/jsx-quotes': 'error',
              'style/jsx-tag-spacing': [
                'error',
                {
                  afterOpening: 'never',
                  beforeClosing: 'never',
                  beforeSelfClosing: 'always',
                  closingSlash: 'never',
                },
              ],
              'style/jsx-wrap-multilines': [
                'error',
                {
                  arrow: 'parens-new-line',
                  assignment: 'parens-new-line',
                  condition: 'parens-new-line',
                  declaration: 'parens-new-line',
                  logical: 'parens-new-line',
                  prop: 'parens-new-line',
                  return: 'parens-new-line',
                },
              ],
            }
          : {},
      },
    },
  ];
}
