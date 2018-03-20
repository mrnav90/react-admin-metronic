import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import AppRoutes from './AppRoutes';

export default class AppRoot extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <AppRoutes routes={this.props.routes} />
        </Router>
      </Provider>
    );
  }
}
