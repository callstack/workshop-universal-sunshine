/**
 * @flow
 */
import common from './config.common';

module.exports = {
  ...common,
  preset: 'react-native',
  rootDir: '../',
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios'],
  },
  testMatch: [
    // Test `__tests__` files within mobile and shared
    '<rootDir>/src/(mobile|shared)/**/__tests__/**/*.{js,jsx,mjs}',
  ],
};
