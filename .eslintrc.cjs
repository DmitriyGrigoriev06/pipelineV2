// ESLint config for Node.js project (ES2019+)
// Uses ESLint v9 flat config compatibility via @eslint/js

/* eslint-env node */

const eslint = require('@eslint/js')

module.exports = {
  ...eslint.configs.recommended,
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'script'
  },
  linterOptions: {
    reportUnusedDisableDirectives: true
  },
  rules: {
    'no-console': 'warn',
    'no-var': 'error',
    'prefer-const': 'error'
  },
  ignores: [
    'node_modules',
    'dist',
    'coverage'
  ]
}


