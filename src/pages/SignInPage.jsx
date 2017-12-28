import React, {Component} from 'react';
import {SignInForm, GuestLayout} from 'components';

export default class SignInPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GuestLayout>
        <SignInForm/>
      </GuestLayout>
    );
  }
}
