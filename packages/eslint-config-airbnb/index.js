module.exports = {
  extends: [
    'eslint-config-airbnb-based',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
