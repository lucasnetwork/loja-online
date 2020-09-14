module.exports = {
  env: {
    es2015: true,
  },
  extends: ['airbnb-base', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/extensions': [
      'warn',
      {
        '~/*': ['src/*'],
      },
    ],
    'import/no-unresolved': 'off',
    camelcase: 'off',
  },
};
