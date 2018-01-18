/**
 * @flow
 */

// Default Jest config
module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/src/shared/**/__tests__/**/*.{js,jsx,mjs}'],
  moduleNameMapper: {
    'shared/(.*)': '<rootDir>/src/shared/$1',
  },
};
