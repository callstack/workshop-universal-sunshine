/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import { days, months } from 'shared/utils/dateUtils';
import type { ForecastType } from 'shared/models/Forecast';
import { getArt } from 'shared/utils/imageUtils';

type Props = {
  item: ForecastType,
  isToday: boolean,
  style?: any, // eslint-disable-line flowtype/no-weak-types
};

class DetailView extends Component<Props> {
  render() {
    const { item, isToday = false, style } = this.props;
    const date = new Date(item.date);

    return (
      <View style={[styles.container, style]}>
        <Text style={[styles.title, styles.primary]}>
          {isToday ? 'Today' : days[date.getDay()]}
        </Text>
        <Text style={styles.date}>
          {`${months[date.getMonth()]} ${date.getDate()}`}
        </Text>
        <View style={styles.temperatureContainer}>
          <View style={styles.column}>
            <Text style={[styles.max, styles.primary]}>{`${Math.round(
              item.day.maxtemp_f
            )} °F`}</Text>
            <Text style={[styles.min, styles.primary]}>{`${Math.round(
              item.day.mintemp_f
            )} °F`}</Text>
          </View>
          <View style={styles.column}>
            <Image
              style={styles.art}
              source={getArt(item.day.condition.code)}
            />
            <Text>{item.day.condition.text}</Text>
          </View>
        </View>
        <View style={styles.extraInfo}>
          <Text style={styles.extraInfoText}>Location: London</Text>
          <Text style={styles.extraInfoText}>{`Humidity: ${
            item.day.avghumidity
          }`}</Text>
          <Text style={styles.extraInfoText}>{`Max wind: ${
            item.day.maxwind_mph
          } mph`}</Text>
          <Text style={styles.extraInfoText}>{`Visibility: ${
            item.day.avgvis_miles
          } mi`}</Text>
          <Text style={styles.extraInfoText}>{`Precipitation: ${
            item.day.totalprecip_in
          }"`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 16,
  },
  title: {
    fontWeight: '500',
    lineHeight: 32,
    fontSize: 20,
  },
  primary: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  date: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  max: {
    fontSize: 64,
  },
  min: {
    fontSize: 36,
  },
  temperatureContainer: {
    flexDirection: 'row',
    paddingVertical: 24,
  },
  art: {
    height: 128,
    width: 128,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraInfo: {
    paddingVertical: 16,
  },
  extraInfoText: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '300',
  },
});

export default DetailView;
