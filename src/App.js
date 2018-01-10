/* @flow */

import { StackNavigator } from 'react-navigation';
import HomeScreen from './scenes/HomeScreen';

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Sunshine',
      headerTitleStyle: {
        color: '#FFFFFF',
      },
      headerStyle: {
        backgroundColor: '#1ca8f4',
        elevation: 0,
        borderBottomWidth: 0,
      },
    },
  },
});

export default App;
