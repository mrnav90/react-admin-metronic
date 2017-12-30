import React, {Component} from 'react';

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
                  <a href="../../../index.html" className="m-brand__logo-wrapper">
                    <img alt="logo" src="../../../assets/demo/default/media/img/logo/logo_default_dark.png"/>
                  </a>
                </div>
                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                  <button id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
                    <span></span>
                  </button>
                  <button id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                    <span></span>
                  </button>
                  <button id="m_aside_header_menu_mobile_toggle" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                    <span></span>
                  </button>
                  <button id="m_aside_header_topbar_mobile_toggle" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                    <i className="flaticon-more"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
              <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark" id="m_aside_header_menu_mobile_close_btn">
                <i className="la la-close"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
