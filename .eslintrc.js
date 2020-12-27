module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'react-app',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
