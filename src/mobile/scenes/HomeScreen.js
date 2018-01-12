/* @flow */

import React, { Component } from 'react';

import withWeather from 'shared/components/withWeather';
import type { ForecastType } from 'shared/models/Forecast';
import HomeView from 'shared/components/HomeView';

type Props = {
  data: ?Array<ForecastType>,
  isFetching: boolean, // eslint-disable-line react/no-unused-prop-types
  fetchWeatherData: () => void,
  navigation: {
    navigate: (
      routeName: string,
      params: { item: ForecastType, isToday?: boolean }
    ) => void,
  },
};

type PressItem = {
  item: ForecastType,
  isToday?: boolean,
};

class HomeScreen extends Component<Props> {
  componentDidMount() {
    this.props.fetchWeatherData();
  }

  onPressItem = (data: PressItem) => {
    const { item, isToday = false } = data;
    this.props.navigation.navigate('Detail', { item, isToday });
  };

  render() {
    const { data } = this.props;

    return <HomeView data={data} onPressItem={this.onPressItem} />;
  }
}

export default withWeather(HomeScreen);
