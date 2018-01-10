/* @flow */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { ForecastType } from './models/Forecast';

type Props = {
  item: ForecastType,
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const ListItem = (props: Props) => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.highlightText}>
          {days[new Date(item.date).getDay()]}
        </Text>
        <Text style={styles.secondaryText}>{item.day.condition.text}</Text>
      </View>
      <View>
        <Text style={styles.highlightText}>{`${Math.round(
          item.day.maxtemp_f
        )} °F`}</Text>
        <Text style={styles.secondaryText}>{`${Math.round(
          item.day.mintemp_f
        )} °F`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlightText: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
  },
  secondaryText: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

export default ListItem;
