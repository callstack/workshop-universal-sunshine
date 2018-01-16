/* @flow */

import { AppRegistry } from 'react-native';

import App from 'web/App';
import registerServiceWorker from 'web/registerServiceWorker';

registerServiceWorker();
/* $FlowFixMe */
AppRegistry.registerComponent('App', () => App);
/* $FlowFixMe */
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
