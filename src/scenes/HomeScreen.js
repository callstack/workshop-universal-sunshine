/* @flow */

import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import withWeather from '../components/withWeather';
import ListItem from '../components/ListItem';
import type { ForecastType } from '../models/Forecast';
import TodayHeader from '../components/TodayHeader';

type Props = {
  data: ?Array<ForecastType>,
  isFetching: boolean,
  fetchWeatherData: () => void,
  navigation: {
    navigate: (routeName: string, params: { item: ForecastType }) => void,
  },
};

class HomeScreen extends Component<Props> {
  componentDidMount() {
    this.props.fetchWeatherData();
  }

  onPressItem = (item: ForecastType) => {
    this.props.navigation.navigate('Detail', { item });
  };

  render() {
    const { data, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TodayHeader
          navigate={navigation.navigate}
          today={(data && data[0]) || null}
        />
        <View>
          {data &&
            data
              .slice(1)
              .map(item => (
                <ListItem
                  key={item.date_epoch}
                  item={item}
                  onPressItem={this.onPressItem}
                />
              ))}
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

export default withWeather(HomeScreen);
