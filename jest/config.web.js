/**
 * @flow
 */
import common from './config.common';

module.exports = {
  ...common,
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  testMatch: [
    '<rootDir>/src/web/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/web/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/web/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/web/config/jest/fileTransform.js',
  },
  moduleNameMapper: {
    ...common.moduleNameMapper,
    '^react-native$': 'react-native-web',
  },
};
