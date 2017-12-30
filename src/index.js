import 'font-awesome/scss/font-awesome.scss';
import 'socicon/css/socicon.css';
import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components';
import {store} from 'reducers';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
