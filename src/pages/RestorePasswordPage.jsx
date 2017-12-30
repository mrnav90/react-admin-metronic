import React, {Component} from 'react';
import {GuestLayout} from 'components/Layout';
import {RestorePasswordForm} from 'components/RestorePasswordForm';

export default class RestorePasswordPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GuestLayout>
        <RestorePasswordForm/>
      </GuestLayout>
    );
  }
}
