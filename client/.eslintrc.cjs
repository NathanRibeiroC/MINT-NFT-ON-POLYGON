module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    "plugin:prettier/recommended"
  ],
  overrides: [
    {
      "files": ["*.tsx", "*.ts"]
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    "no-param-reassign": [2, { "props": false }],
    'prettier/prettier': 'error',
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  },
};