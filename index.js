module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/legacy.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/react.js',
    './rules/importplugin.js',
    'plugin:ava/recommended',
  ],
  plugins: [ 'ava', 'compat', 'import', 'react' ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.json' ],
      },
    },
  },
};
