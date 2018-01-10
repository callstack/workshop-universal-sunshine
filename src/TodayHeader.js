/* @flow */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { ForecastType } from './models/Forecast';
import { getArt } from './imageUtils';

type Props = {
  today: ?ForecastType,
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const renderToday = (today: ForecastType) => {
  const date = new Date(today.date);

  return (
    <View>
      <Text style={styles.date}>{`Today, ${date.getDate()} ${
        months[date.getMonth()]
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

const TodayHeader = (props: Props) => {
  const { today } = props;

  return <View style={styles.container}>{today && renderToday(today)}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingVertical: 48,
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
