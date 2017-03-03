module.exports = {
  extends: [
    // "eslint:recommended",
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/legacy.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/react.js',
    './rules/react-a11y.js',
    'plugin:ava/recommended'
  ],
  plugins: [
    'ava',
    'import',
    'react',
    'jsx-a11y'
  ],
  parser:        'babel-eslint',
  parserOptions: {
    ecmaVersion:  7,
    sourceType:   'module',
    ecmaFeatures: {
      jsx:                              true,
      generators:                       false,
      objectLiteralDuplicateProperties: false
    },
  },
  env: {
    es6:     true,
    browser: true,
    node:    true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.json' ]
      }
    }
  }
};
