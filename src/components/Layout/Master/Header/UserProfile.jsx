import React, {Component} from 'react';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-dropdown__wrapper">
        <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
        <div className="m-dropdown__inner">
          <div className="m-dropdown__header m--align-center">
            <div className="m-card-user m-card-user--skin-dark">
              <div className="m-card-user__pic">
                <img src="/assets/images/user.jpg" className="m--img-rounded m--marginless" alt=""/>
              </div>
              <div className="m-card-user__details">
                <span className="m-card-user__name m--font-weight-500">
                  Mark Andre
                </span>
                <a href="" className="m-card-user__email m--font-weight-300 m-link">
                  mark.andre@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="m-dropdown__body">
            <div className="m-dropdown__content">
              <ul className="m-nav m-nav--skin-light">
                <li className="m-nav__section m--hide">
                  <span className="m-nav__section-text">
                    Section
                  </span>
                </li>
                <li className="m-nav__item">
                  <a href="../../../header/profile.html" className="m-nav__link">
                    <i className="m-nav__link-icon flaticon-profile-1"></i>
                    <span className="m-nav__link-title">
                      <span className="m-nav__link-wrap">
                        <span className="m-nav__link-text">
                          My Profile
                        </span>
                        <span className="m-nav__link-badge">
                          <span className="m-badge m-badge--success">
                            2
                          </span>
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
                <li className="m-nav__separator m-nav__separator--fit"></li>
                <li className="m-nav__item">
                  <a href="../../../snippets/pages/user/login-1.html" className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
