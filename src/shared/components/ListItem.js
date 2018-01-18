/* @flow */

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ForecastType } from 'shared/models/Forecast';
import { getIcon } from 'shared/utils/imageUtils';
import { days } from 'shared/utils/dateUtils';

type Props = {
  item: ForecastType,
  isUS?: boolean,
  onPressItem: ({ item: ForecastType, isToday?: boolean }) => void,
};

class ListItem extends Component<Props> {
  onPressItem = () => {
    this.props.onPressItem({ item: this.props.item });
  };

  render() {
    const { item, isUS = true } = this.props;

    const unit = isUS ? 'F' : 'C';

    return (
      <TouchableOpacity onPress={this.onPressItem}>
        <View style={styles.container}>
          <View style={[styles.contentLeft, styles.shrink]}>
            <Image
              style={styles.icon}
              source={getIcon(item.day.condition.code)}
            />
            <View style={styles.shrink}>
              <Text style={styles.highlightText}>
                {days[new Date(item.date).getDay()]}
              </Text>
              <Text
                style={styles.secondaryText}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {item.day.condition.text}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.highlightText}>{`${Math.round(
              item.day.maxtemp_f
            )} °${unit}`}</Text>
            <Text style={styles.secondaryText}>{`${Math.round(
              item.day.mintemp_f
            )} °${unit}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentLeft: {
    flexDirection: 'row',
    paddingRight: 8,
  },
  shrink: {
    flexShrink: 1,
  },
  icon: {
    height: 36,
    width: 36,
    alignSelf: 'center',
    marginRight: 16,
  },
  highlightText: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  secondaryText: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

export default ListItem;
