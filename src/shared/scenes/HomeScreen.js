/* @flow */

import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import withWeather from 'shared/components/withWeather';
import ListItem from 'shared/components/ListItem';
import type { ForecastType } from 'shared/models/Forecast';
import TodayHeader from 'shared/components/TodayHeader';

type Props = {
  data: ?Array<ForecastType>,
  isFetching: boolean, // eslint-disable-line react/no-unused-prop-types
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
