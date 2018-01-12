module.exports = {
  extends: 'callstack-io',
  rules: {
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.shared',
      },
    },
  },
};
