module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-refresh/only-export-components': 0,
    'unused-imports/no-unused-imports': 'error',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Node.js built-ins
          ['^node:'],

          // 2. External packages
          ['^react', '^next', '^@?\\w'],

          // 3. Absolute imports (aliases)
          ['^@/'],

          // 4. Side effect imports
          ['^\\u0000'],

          // 5. Parent imports
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // 6. Same-folder imports
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // 7. Style imports
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
};
