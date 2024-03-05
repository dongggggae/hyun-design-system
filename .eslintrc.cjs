module.exports = {
  extends: ['next', 'plugin:prettier/recommended', 'prettier'],
  ignorePatterns: ['dist'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['import'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'next',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@utils/**',
            group: 'external',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
