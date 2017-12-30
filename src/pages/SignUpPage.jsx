import React, {Component} from 'react';
import {GuestLayout} from 'components/Layout';
import {SignUpForm} from 'components/SignUpForm';

export default class SignUpPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <GuestLayout>
        <SignUpForm/>
      </GuestLayout>
    );
  }
}
