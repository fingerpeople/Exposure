module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  // required to lint *.vue files
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'array-element-newline': ['error', 'consistent'],
    'no-whitespace-before-property': ['error'],
    'camelcase': ['error', {
      'properties': 'always'
    }],

    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/camelcase': ['error', {
      'properties': 'always'
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }]
  }
}