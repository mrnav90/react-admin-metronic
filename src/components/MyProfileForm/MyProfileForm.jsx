import React, {Component} from 'react';
import {LoadingPage} from 'components/Utils';

export default class MyProfileForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isSubmit: false,
      isValid: true
    };
  }

  render() {
    return (
      <LoadingPage isShow={false} />
    );
  }
}
