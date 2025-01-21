import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/*',
  // {
  //   // extends: './vite.config.ts',
  //   test: {
  //     name: 'unit',
  //     include:  ['./packages/**/*.test.ts'],
  //     environment: 'node',
  //     globals: true
  //   },
  // },
  // {
  //   // extends: './vite.config.ts',
  //   test: {
  //     name: 'integration',
  //     include: ['integration/**/*.test.ts'],
  //     environment: 'node',
  //     globals: true,
  //   },
  // },
])
