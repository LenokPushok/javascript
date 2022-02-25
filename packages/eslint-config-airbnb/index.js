module.exports = {
  extends: [
    'eslint-conf-airbnb-base',
    './rules/vue',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
