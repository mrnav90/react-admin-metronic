import React, {Component} from 'react';
import {SignUpForm, GuestLayout} from 'components';

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
