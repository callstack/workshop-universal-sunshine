/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './web/App';
import registerServiceWorker from './web/registerServiceWorker';

/* $FlowFixMe */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
