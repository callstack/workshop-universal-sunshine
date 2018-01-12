/* @flow */

import React, { Component } from 'react';

import type { ForecastType } from 'shared/models/Forecast';
import DetailView from 'shared/components/DetailView';

type Props = {
  navigation: {
    state: {
      params: {
        item: ForecastType,
        isToday: boolean,
      },
    },
  },
};

class DetailScreen extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'Detail',
  };

  render() {
    const { item, isToday = false } = this.props.navigation.state.params;

    return <DetailView item={item} isToday={isToday} />;
  }
}

export default DetailScreen;
