module.exports = {
  extends: [
    'eslint-conf-airbnb-base',
    './rules/vue',
    './rules/vue-a11y',
  ].map(require.resolve),
  rules: {}
};
