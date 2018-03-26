import React, {Component} from 'react';
import {GuestLayout} from 'components/Layout';
import PropTypes from 'prop-types';
import ResetPasswordForm from 'components/ResetPasswordForm';

export default class ResetPasswordPage extends Component {
  static propTypes = {
    match: PropTypes.object
  }
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GuestLayout>
        <ResetPasswordForm params={this.props.match.params}/>
      </GuestLayout>
    );
  }
}
