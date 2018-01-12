const sharedConfig = require('./webpack.config.shared');

module.exports = (_, defaults) => ({
  entry: './src/index.mobile.js',
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      ...sharedConfig.resolve.alias,
    },
  },
});
