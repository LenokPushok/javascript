module.exports = {
  extends: [
    'eslint-config-airbnb-based',
    './rules/node',
    './rules/node-a11y',
  ].map(require.resolve),
  rules: {}
};
