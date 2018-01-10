import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

import 'theme/main.scss';
import 'theme/scripts.bundle.js';
import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components';
import {store} from 'reducers';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
