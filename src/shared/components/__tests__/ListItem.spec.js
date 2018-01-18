/* eslint-env jest */

/**
 * @flow
 */

import React from 'react';

import renderer from 'react-test-renderer';

const item = {
  date: '2018-01-22',
  date_epoch: 1516579200,
  day: {
    maxtemp_c: 18.2,
    maxtemp_f: 64.8,
    mintemp_c: 2.2,
    mintemp_f: 36.0,
    avgtemp_c: 9.6,
    avgtemp_f: 49.2,
    maxwind_mph: 11.9,
    maxwind_kph: 19.1,
    totalprecip_mm: 0.0,
    totalprecip_in: 0.0,
    avgvis_km: 20.0,
    avgvis_miles: 120,
    avghumidity: 36.0,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.apixu.com/weather/64x64/day/116.png',
      code: 1003,
    },
    uv: 39960.0,
  },
  astro: {
    sunrise: '07:29 AM',
    sunset: '06:29 PM',
    moonrise: '11:10 AM',
    moonset: '11:30 PM',
  },
};

describe('ListItem', () => {
  it('should render given item', () => {
    // eslint-disable-next-line global-require
    const ListItem = require('../ListItem').default;

    const tree = renderer.create(
      <ListItem item={item} onPressItem={() => {}} />
    );
    expect(tree).toMatchSnapshot();
	});

});
