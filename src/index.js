import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'theme/main.scss';
import 'styles/main.scss';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import 'theme/scripts.bundle.js';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components';
import {store} from 'reducers';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
