/* @flow */

import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import withWeather from './withWeather';
import ListItem from './ListItem';
import type { ForecastType } from './models/Forecast';
import TodayHeader from './TodayHeader';

type Props = {
  data: ?Array<ForecastType>,
  isFetching: boolean,
  fetchWeatherData: () => void,
};

class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchWeatherData();
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TodayHeader today={(data && data[0]) || null} />
        <View>
          {data &&
            data
              .slice(1)
              .map(item => <ListItem key={item.date_epoch} item={item} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});

export default withWeather(App);
