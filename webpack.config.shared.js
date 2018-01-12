/* @flow */

const path = require('path');

module.exports = {
  resolve: {
    alias: {
      shared: path.join(__dirname, 'src/shared'),
      web: path.join(__dirname, 'src/web'),
      mobile: path.join(__dirname, 'src/mobile'),
    },
  },
};
