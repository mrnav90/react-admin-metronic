import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import AppSwitchRouter from './AppSwitchRouter';

export default class AppRoutes extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    parent: PropTypes.array
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <AppSwitchRouter>
        {this.props.routes.map((route, idx) => (
          <Route key={idx} path={route.path} exact={route.exact} render={(props) => (
            <route.component {...props} route={route} routes={route.routes}/>
          )}/>
        ))}
      </AppSwitchRouter>
    );
  }
}
