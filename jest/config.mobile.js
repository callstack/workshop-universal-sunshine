module.exports = {
  preset: 'react-native',
  rootDir: '../',
  moduleNameMapper: {
    'shared/(.*)': '<rootDir>/src/shared/$1.js',
  },
  testMatch: [
    // Test `__tests__` files within mobile and shared
    '<rootDir>/src/(mobile|shared)/**/__tests__/**/*.{js,jsx,mjs}',
  ],
};
