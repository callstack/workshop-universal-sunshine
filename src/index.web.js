/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'web/App';
import registerServiceWorker from 'web/registerServiceWorker';
import './index.css';

/* $FlowFixMe */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
