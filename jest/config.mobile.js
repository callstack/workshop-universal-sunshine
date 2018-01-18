/**
 * @flow
 */
const common = require('./config.common');

module.exports = {
  ...common,
  preset: 'react-native',
  testMatch: [
    ...common.testMatch,
    '<rootDir>/src/mobile/**/__tests__/**/*.{js,jsx,mjs}',
  ],
};
