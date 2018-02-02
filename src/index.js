import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
// 重写的history，这样可以直接使用，不用引入withRouter，限制小
import history from './config/history'
import { Provider } from 'mobx-react';
import stores from './stores'
import './assets/style/reset.less'
import './assets/style/common.less'
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
