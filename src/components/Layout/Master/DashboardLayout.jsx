import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MasterLayout} from 'components/Layout';
import {connect} from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import {memberZone} from 'components/HOC';

@connect(state => ({
  language: state.i18n.locale
}))

@memberZone
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
          <button className="m-aside-left-close m-aside-left-close--skin-dark" id="m_aside_left_close_btn">
            <i className="la la-close"></i>
          </button>
          <Sidebar/>
          {childrenWithProps}
        </div>
      </MasterLayout>
    );
  }
}
