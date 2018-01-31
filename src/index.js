import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
// 重写的history
import history from './config/History'
import './assets/style/reset.less'
import './assets/style/common.less'
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
