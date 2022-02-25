module.exports = {
  extends: [
    'eslint-config-airbnb-based',
    './canon/node',
    './rules/node-a11y',
  ].map(require.resolve),
  rules: {}
};
