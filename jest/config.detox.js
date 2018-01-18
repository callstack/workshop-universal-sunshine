/**
 * @flow
 */
module.exports = {
  rootDir: '../',
  preset: 'react-native',
  setupTestFrameworkScriptFile: './jest/detoxSetup.js',
  testMatch: ['<rootDir>/src/mobile/**/__e2e__/**/*.{js,jsx,mjs}'],
};
