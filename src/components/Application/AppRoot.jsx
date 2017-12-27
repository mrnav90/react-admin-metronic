import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRoutes from './AppRoutes';

const AppRoot = ({store, routes}) => (
  <Provider store={store}>
    <Router>
      <AppRoutes routes={routes} />
    </Router>
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default AppRoot;
