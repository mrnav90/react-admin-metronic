import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppRoutes from './AppRoutes';
import {connect} from 'react-redux';
import {isAuthenticated} from 'utils';
import {getUserInfo} from 'actions';

@connect()
export default class Application extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    route: PropTypes.object,
    dispatch: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.dispatch(getUserInfo());
    }
  }

  render() {
    return (
      <AppRoutes routes={this.props.route.routes}/>
    );
  }
}
