/* @flow */

import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import withWeather from './withWeather';
import ListItem from './ListItem';
import type { ForecastType } from './models/Forecast';

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
        <View style={styles.todayContainer} />
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
  todayContainer: {
    height: 200,
    backgroundColor: '#1ca8f4',
  },
});

export default withWeather(App);
