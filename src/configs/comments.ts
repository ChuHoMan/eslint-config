import type { FlatESLintConfigItem } from 'eslint-define-config';
import { pluginComments } from '../plugins';

export function comments(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        'eslint-comments': pluginComments as any,
      },
      rules: {
        'eslint-comments/disable-enable-pair': 'off',
        // inline rules to make it explicit
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
      },
    },
  ];
}
