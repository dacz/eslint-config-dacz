# eslint-config-dacz

For node project use [`eslint-config-dacz-node`](https://github.com/dacz/eslint-config-dacz-node)

[![current version](https://img.shields.io/npm/v/eslint-config-dacz.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-dacz)
[![travis.ci](https://img.shields.io/travis/dacz/eslint-config-dacz.svg?style=flat-square)](https://travis-ci.org/dacz/eslint-config-dacz)
[![license](https://img.shields.io/github/license/dacz/eslint-config-dacz.svg)](https://github.com/dacz/eslint-config-dacz/blob/master/LICENSE)

[![Greenkeeper badge](https://badges.greenkeeper.io/dacz/eslint-config-dacz.svg)](https://greenkeeper.io/)

My eslint config (moving target, changes often).

It's based on my personal preference.

## Usage

1. `npm install --save-dev eslint-config-dacz eslint`
2. add `"extends": "dacz"` to your .eslintrc.js

This is my `eslintrc.js`:

```
module.exports = {
  extends: 'dacz',
  rules: {},
};
```

## Notes

For node project use [`eslint-config-dacz-node`](https://github.com/dacz/eslint-config-dacz-node)

I like immutability and simplicity so I add/remove rules to enforce it.

I prefer pure functional components in React to allow recompose (and other tools) to optimize them, I kicked off the propTypes checking. Maybe I'll start using flow one day :)

