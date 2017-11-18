module.exports = {
  rules: {
    'import/no-unresolved': [2, { commonjs: true }],
    'import/default': 2,
    'import/no-deprecated': 1,
    'import/export': 2,
    'import/no-duplicates': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/test-*.js',
          '**/*.test.js',
          '**/*.test.serial.js',
          '**/*.spec.js',
          'tests/**/*',
          'webpack*',
          '**/webpack*',
          '**/webpack*',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-amd': 2,
    'import/no-mutable-exports': 2,
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //   },
    // ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
