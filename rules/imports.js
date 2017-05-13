module.exports = {
  'rules': {
    'import/no-unresolved': [2, { 'commonjs': true }],
    'import/default': 2,
    'import/no-deprecated': 1,
    'import/export': 2,
    'import/no-extraneous-dependencies': [2, {
      'devDependencies': false,
      'optionalDependencies': false,
    }],
    'import/no-amd': 2,
    'import/no-mutable-exports': 2,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.json']
      }
    }
  }
};
