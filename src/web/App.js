/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import withWeather from 'shared/components/withWeather';
import HomeView from 'shared/components/HomeView';
import type { ForecastType } from 'shared/models/Forecast';
import DetailView from 'shared/components/DetailView';

type Props = {
  data: ?Array<ForecastType>,
  fetchWeatherData: () => void,
};

type State = {
  selectedId: ?number,
  isToday: boolean,
};

class App extends Component<Props, State> {
  state = {
    selectedId: null,
    isToday: true,
  };

  componentDidMount() {
    this.props.fetchWeatherData();
  }

  onItemSelected = ({ item, isToday }) => {
    if (this.props.selectedId !== item.date_epoch)
      this.setState({ selectedId: item.date_epoch, isToday });
  };

  getSelected(data: Array<ForecastType>) {
    const { selectedId } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].date_epoch === selectedId) {
        return data[i];
      }
    }
    return data[0]; // Default is today
  }

  render() {
    const { data } = this.props;
    const { isToday } = this.state;
    return (
      <View style={styles.container}>
        <HomeView
          data={data}
          onPressItem={this.onItemSelected}
          style={styles.home}
        />
        {data && (
          <DetailView
            item={this.getSelected(data)}
            isToday={isToday}
            style={styles.detail}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
  },
  home: {
    flex: 0.4,
  },
  detail: {
    flex: 0.6,
    padding: 48,
  },
});

export default withWeather(App);
