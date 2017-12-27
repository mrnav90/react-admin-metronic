import React, {Component} from 'react';
import {SignInForm} from 'components';

export default class SignInPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <SignInForm/>
    );
  }
}
