import React, {Component} from 'react';
import {RestorePasswordForm, GuestLayout} from 'components';

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
