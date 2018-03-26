import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {translate} from 'utils';
import NavItem from 'components/NavItem';
import menu from 'constants/menu';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside id="m_aside_left" className="m-grid__item m-aside-left m-aside-left--skin-dark">
        <div id="m_ver_menu"
          className="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark"
          data-menu-vertical="true"
          data-menu-scrollable="false"
          data-menu-dropdown-timeout="500">
          <ul className="m-menu__nav m-menu__nav--dropdown-submenu-arrow">
            {
              menu.map((item, idx) => {
                return (
                  <NavItem key={idx} active={item.link} submenu={item.subMenu && item.subMenu.length > 0}>
                    {
                      item.subMenu && item.subMenu.length > 0 ? (
                        <Link to={item.link} className="m-menu__link m-menu__toggle">
                          <i className={`m-menu__link-icon ${item.icon}`}></i>
                          <span className="m-menu__link-text">{translate(item.translateKey)}</span>
                          <i className="m-menu__ver-arrow la la-angle-right"></i>
                        </Link>
                      ) : (
                        <Link to={item.link} className="m-menu__link">
                          <i className={`m-menu__link-icon ${item.icon}`}></i>
                          <span className="m-menu__link-text">{translate(item.translateKey)}</span>
                        </Link>
                      )
                    }
                    {
                      item.subMenu && item.subMenu.length > 0 ? (
                        <div className="m-menu__submenu">
                          <span className="m-menu__arrow"></span>
                          <ul className="m-menu__subnav">
                            <li className="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                              <span className="m-menu__link">
                                <span className="m-menu__link-text">{translate(item.translateKey)}</span>
                              </span>
                            </li>
                            {
                              item.subMenu.map((subItem, index) => {
                                return (
                                  <NavItem key={index} active={item.link}>
                                    <Link to={subItem.link} className="m-menu__link">
                                      <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                        <span></span>
                                      </i>
                                      <span className="m-menu__link-text">{translate(subItem.translateKey)}</span>
                                    </Link>
                                  </NavItem>
                                );
                              })
                            }
                          </ul>
                        </div>
                      ) : null
                    }
                  </NavItem>
                );
              })
            }
          </ul>
        </div>
      </aside>
    );
  }
}
