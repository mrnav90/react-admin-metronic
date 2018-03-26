import React, {Component} from 'react';
import UserProfile from './UserProfile';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="m-grid__item m-header" data-minimize-offset="200" data-minimize-mobile-offset="200">
        <div className="m-container m-container--fluid m-container--full-height">
          <div className="m-stack m-stack--ver m-stack--desktop">
            <div className="m-stack__item m-brand  m-brand--skin-dark">
              <div className="m-stack m-stack--ver m-stack--general">
                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                  <a className="m-brand__logo-wrapper">
                    <img alt="logo" src="/assets/images/kakak_logo_white.png"/>
                  </a>
                </div>
                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                  <a id="m_aside_left_minimize_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
                    <span></span>
                  </a>
                  <a id="m_aside_left_offcanvas_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                    <span></span>
                  </a>
                  <a id="m_aside_header_topbar_mobile_toggle"
                    className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                    <i className="flaticon-more"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
              <button className="m-aside-header-menu-mobile-close m-aside-header-menu-mobile-close--skin-dark"
                id="m_aside_header_menu_mobile_close_btn">
                <i className="la la-close"></i>
              </button>
              <div id="m_header_topbar" className="m-topbar m-stack m-stack--ver m-stack--general">
                <div className="m-stack__item m-topbar__nav-wrapper">
                  <ul className="m-topbar__nav m-nav m-nav--inline">
                    <li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
                      data-dropdown-toggle="click">
                      <a href="#" className="m-nav__link m-dropdown__toggle">
                        <span className="m-topbar__userpic">
                          <img src="/assets/images/user.jpg" className="m--img-rounded m--marginless m--img-centered" alt=""/>
                        </span>
                      </a>
                      <UserProfile/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
