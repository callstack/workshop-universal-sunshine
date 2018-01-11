/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class DetailScreen extends Component<{}> {
  static navigationOptions = {
    headerTitle: 'Detail',
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
});

export default DetailScreen;
