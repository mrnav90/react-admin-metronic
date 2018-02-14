import React, {Component} from 'react';
import {GuestLayout} from 'components/Layout';
import {ResetPasswordForm} from 'components/ResetPasswordForm';

export default class ResetPasswordPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GuestLayout>
        <ResetPasswordForm/>
      </GuestLayout>
    );
  }
}
