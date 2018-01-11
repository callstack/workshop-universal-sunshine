/* @flow */

import { StackNavigator } from 'react-navigation';
import HomeScreen from './scenes/HomeScreen';
import DetailScreen from './scenes/DetailScreen';

const App = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Sunshine',
      },
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    navigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#1ca8f4',
        elevation: 0,
        borderBottomWidth: 0,
      },
    },
  }
);

export default App;
