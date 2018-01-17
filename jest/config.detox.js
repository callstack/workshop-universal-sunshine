/**
 * @flow
 */
const common = require('./config.common');

module.exports = {
  ...common,
  preset: 'react-native',
  setupTestFrameworkScriptFile: './jest/detoxSetup.js',
  testMatch: [
    // Test `__tests__` files within mobile and shared
    '<rootDir>/src/(mobile|shared)/**/__e2e__/**/*.{js,jsx,mjs}',
  ],
};
