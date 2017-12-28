import React, {Component} from 'react';
import {RequestPasswordForm, GuestLayout} from 'components';

export default class RequestPasswordPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GuestLayout>
        <RequestPasswordForm/>
      </GuestLayout>
    );
  }
}
