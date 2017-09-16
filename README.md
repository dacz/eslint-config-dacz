# eslint-config-dacz

[![Greenkeeper badge](https://badges.greenkeeper.io/dacz/eslint-config-dacz.svg)](https://greenkeeper.io/)

My eslint config (moving target, changes often).

It's based on my personal preference.

## Usage

1. `npm install --save-dev eslint-config-dacz eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "dacz"` to your .eslintrc.js

## Notes

I like immutability and simplicity so I add/remove rules to enforce it.

I prefer pure functional components in React to allow recompose (and other tools) to optimize them, I kicked off the propTypes checking. Maybe I'll start using flow one day :)

