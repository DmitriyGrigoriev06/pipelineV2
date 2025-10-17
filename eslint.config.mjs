// Flat config for ESLint v9+
// See: https://eslint.org/docs/latest/use/getting-started

// @ts-check
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
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
]


