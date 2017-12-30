import React, {Component} from 'react';
import {GuestLayout} from 'components/Layout';
import {SignInForm} from 'components/SignInForm';

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
