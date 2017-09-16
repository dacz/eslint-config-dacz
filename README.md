# eslint-config-dacz

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

I like immutability and simplicity so I add/remove rules to enforce it.

I prefer pure functional components in React to allow recompose (and other tools) to optimize them, I kicked off the propTypes checking. Maybe I'll start using flow one day :)

