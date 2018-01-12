/* @flow */

import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import ListItem from 'shared/components/ListItem';
import type { ForecastType } from 'shared/models/Forecast';
import TodayHeader from 'shared/components/TodayHeader';

type Props = {
  data: ?Array<ForecastType>,
  onPressItem: ({ item: ForecastType, isToday?: boolean }) => void,
};

type PressItem = {
  item: ForecastType,
  isToday?: boolean,
};

class HomeView extends Component<Props> {
  onPressItem = (data: PressItem) => {
    const { item, isToday = false } = data;
    this.props.onPressItem({ item, isToday });
  };

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TodayHeader
          onPressItem={this.onPressItem}
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

export default HomeView;
