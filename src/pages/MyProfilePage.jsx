import React, {Component} from 'react';
import {DashboardLayout} from 'components/Layout';
import MyProfileForm from 'components/MyProfileForm';

export default class MyProfilePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DashboardLayout>
        <MyProfileForm/>
      </DashboardLayout>
    );
  }
}
