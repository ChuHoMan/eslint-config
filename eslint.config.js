import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
require('sucrase/register');

/** @type {typeof import('./src/index.ts')} */
const { chuhoman } = require('./src/index.ts');

export default chuhoman(
  {
    typescript: true,
  },
  {
    files: ['src/**/*.ts'],
  },
);
