import { FlatESLintConfigItem } from 'eslint-define-config';
import { pluginNode } from '../plugins';

export function node(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        node: pluginNode,
      },
      rules: {
        'node/handle-callback-err': ['error', '^(err|error)$'],
        'node/no-callback-literal': 'error',
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/process-exit-as-throw': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/process': ['error', 'never'],
      },
    },
  ];
}
