/* @flow */

import * as React from 'react';
import { APIXU_API_KEY } from '../secrets';
import type { ForecastType } from '../models/Forecast';

type State = {
  isFetching: boolean,
  data: ?Array<ForecastType>,
};

const withWeather = (Component: React.ComponentType<*>) =>
  class extends React.Component<*, State> {
    state = {
      isFetching: true,
      data: null,
    };

    fetchWeatherData = async () => {
      const url = `https://api.apixu.com/v1/forecast.json?key=${APIXU_API_KEY}&q=London&days=7`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        /* TODO Note: Setting state here is not safe as the component could unmount before the request finishes.
        We could use Redux, RxJS, etc. However, just for the purpose of the workshop, we will stick with it */
        this.setState({ isFetching: false, data: data.forecast.forecastday });
      } catch (e) {
        this.setState({ isFetching: false });
      }
    };

    render() {
      const { isFetching, data } = this.state;
      return (
        <Component
          isFetching={isFetching}
          data={data}
          fetchWeatherData={this.fetchWeatherData}
          {...this.props}
        />
      );
    }
  };

export default withWeather;
