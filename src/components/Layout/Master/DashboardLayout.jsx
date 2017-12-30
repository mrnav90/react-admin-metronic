import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MasterLayout, Header} from 'components/Layout';

export default class DashboardLayout extends Component {
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
        <Header/>
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
          {childrenWithProps}
        </div>
      </MasterLayout>
    );
  }
}
