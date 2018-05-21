import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.css';
import 'react-select/dist/react-select.css';
import 'theme/main.scss';
import 'styles/main.scss';

import 'bootstrap';
import 'bootstrap-select';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import 'theme/scripts.bundle.js';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'routes';
import {AppRoot} from 'components/Application';
import store from 'store';

ReactDOM.render((
  <AppRoot store={store} routes={routes}/>
), document.getElementById('app'));
