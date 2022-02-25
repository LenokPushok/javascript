module.exports = {
  extends: [
    'eslint-conf-airbnb-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
