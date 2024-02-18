module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: ['src/**/*'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.ts'],
  rules: {
    'dot-notation': 2,
    'no-console': [1, { allow: ['info', 'warn', 'error'] }],
    'no-var': 2,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/consistent-type-asnt-type-imposertions': 0,
    '@typescript-eslint/consisterts': 0,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/array-type': 0,
    'prefer-destructuring': [1, { object: true, array: false }],
    'prefer-const': 2,
    'import/newline-after-import': 2,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
