module.exports = {
  extends: [
    'eslint-config-airbnb-based',
    './canon/node',
    './canon/node-a11y',
  ].map(require.resolve),
  rules: {}
};
