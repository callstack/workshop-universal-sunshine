/**
 * @flow
 */
const common = require('./config.common');

module.exports = {
  ...common,
  preset: 'react-native',
  testMatch: [
    // Test `__tests__` files within mobile and shared
    '<rootDir>/src/(mobile|shared)/**/__tests__/**/*.{js,jsx,mjs}',
  ],
};
