module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
  },
}

// // Fast refresh can't handle anonymous components. Add a name to your export.
// // rules: {
// //   'react-refresh/only-export-components': [
// //     'warn',
// //     { allowConstantExport: true },
// //   ],
// // },