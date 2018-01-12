/* @flow */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ForecastType } from 'shared/models/Forecast';
import { getArt } from 'shared/utils/imageUtils';
import { monthsShort } from 'shared/utils/dateUtils';

type Props = {
  today: ?ForecastType,
  onPressItem: ({ item: ForecastType, isToday?: boolean }) => void,
};

const renderToday = (today: ForecastType) => {
  const date = new Date(today.date);

  return (
    <View>
      <Text style={styles.date}>{`Today, ${date.getDate()} ${
        monthsShort[date.getMonth()]
      }, London`}</Text>
      <View style={styles.content}>
        <View style={styles.column}>
          <Text style={styles.max}>{`${Math.round(
            today.day.maxtemp_f
          )} °F`}</Text>
          <Image style={styles.art} source={getArt(today.day.condition.code)} />
        </View>
        <View style={styles.column}>
          <Text style={styles.smallText}>{`${Math.round(
            today.day.mintemp_f
          )} °F`}</Text>
          <Text style={[styles.smallText, styles.condition]}>
            {today.day.condition.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

class TodayHeader extends Component<Props> {
  onPressToday = () => {
    if (this.props.today) {
      this.props.onPressItem({ item: this.props.today, isToday: true });
    }
  };

  render() {
    const { today } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.onPressToday}>
        <View style={styles.container}>{today && renderToday(today)}</View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingVertical: 8,
    paddingLeft: 16 + 16 + 36, // To align with list items
    paddingRight: 32,
    backgroundColor: '#1ca8f4',
  },
  content: {
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  max: {
    fontSize: 48,
    color: '#FFFFFF',
  },
  smallText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  art: {
    height: 64,
    width: 64,
    marginLeft: 'auto',
  },
  condition: {
    marginLeft: 'auto',
  },
});

export default TodayHeader;
