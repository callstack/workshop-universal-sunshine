// @flow

import React from 'react';
import renderer from 'react-test-renderer';

global.fetch = jest.fn();

jest.mock(
  '../../../secrets',
  () => ({
    APIXU_API_KEY: '12345',
  }),
  { virtual: true }
);

describe('HomeScreen', () => {
  it('calls fetch with correct parameters', () => {
    // eslint-disable-next-line global-require
    const HomeScreen = require('../HomeScreen').default;

    renderer.create(<HomeScreen />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.apixu.com/v1/forecast.json?key=12345&q=London&days=7'
    );
  });
});
