import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MasterLayout} from 'components';

export default class GuestLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <MasterLayout>
        <div className="m-grid m-grid--hor m-grid--root m-page">
          <div className="guest-page m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--singin m-login--2 m-login-2--skin-2">
            <div className="m-grid__item m-grid__item--fluid m-login__wrapper">
              {childrenWithProps}
            </div>
          </div>
        </div>
      </MasterLayout>
    );
  }
}
