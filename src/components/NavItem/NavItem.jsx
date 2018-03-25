import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import classnames from 'classnames';

@withRouter
export default class NavItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    children: PropTypes.node,
    active: PropTypes.string,
    location: PropTypes.object,
    submenu: PropTypes.bool
  }

  render () {
    const {location, active, children, submenu} = this.props;
    const isActive = location.pathname === active;

    return (
      <li className={classnames('m-menu__item',
        {
          'm-menu__item--active': isActive && !submenu,
          'm-menu__item--submenu m-menu__item--expanded': submenu,
          'm-menu__item--open': isActive && submenu
        }
      )}
      aria-haspopup="true"
      data-menu-submenu-toggle={submenu ? 'hover' : ''}>
        {children}
      </li>
    );
  }
}
