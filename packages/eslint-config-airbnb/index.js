module.exports = {
  extends: [
    'eslint-config-airbnb-based',
    './rules/node',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
