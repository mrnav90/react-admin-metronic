import React, {Component} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isAuthenticated} from 'utils';

@connect(state => ({
  auth: state.auth
}))

@withRouter
export default function(WrappedComponent) {
  return class GuestZone extends Component {
    static propTypes = {
      dispatch: PropTypes.func,
      auth: PropTypes.object,
      history: PropTypes.object
    }

    constructor(props, context) {
      super(props, context);
    }

    componentDidMount() {
      if (isAuthenticated()) {
        this.props.history.push('/dashboard');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.auth && nextProps.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
    }

    render() {
      if (!this.props.auth || !this.props.auth.isAuthenticated) {
        return <WrappedComponent {...this.props}/>;
      }
      return null;
    }
};
}
