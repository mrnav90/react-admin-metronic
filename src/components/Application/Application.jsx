import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppRoutes from './AppRoutes';

export default class Application extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    route: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <AppRoutes routes={this.props.route.routes}/>
    );
  }
}
