import React, {Component} from 'react';
import {GuestLayout} from 'components/Layout';
import {RequestPasswordForm} from 'components/RequestPasswordForm';

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
