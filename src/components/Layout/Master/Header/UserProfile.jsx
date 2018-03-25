import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {changeLanguage, logout} from 'actions';
import PropTypes from 'prop-types';
import {translate} from 'utils';
import {getUserInfo} from 'utils';

@connect(state => ({
  language: state.i18n.locale,
  auth: state.auth
}))

export default class UserProfile extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    language: PropTypes.string,
    auth: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      user: getUserInfo()
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth && nextProps.auth.user) {
      this.setState({user: nextProps.auth.user});
    }
  }

  changeLanguage() {
    const key = this.props.language === 'en' ? 'ja' : 'en';
    this.props.dispatch(changeLanguage(key));
  }

  logout() {
    this.props.dispatch(logout());
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
                <span className="m-card-user__name m--font-weight-500">{this.state.user.name}</span>
                <a href={`mailto:${this.state.user.email}`} className="m-card-user__email m--font-weight-300 m-link">{this.state.user.email}</a>
              </div>
            </div>
          </div>
          <div className="m-dropdown__body">
            <div className="m-dropdown__content">
              <ul className="m-nav m-nav--skin-light">
                <li className="m-nav__item">
                  <Link to="/my-profile" className="m-nav__link">
                    <i className="m-nav__link-icon flaticon-profile-1"></i>
                    <span className="m-nav__link-title">
                      <span className="m-nav__link-wrap">
                        <span className="m-nav__link-text">{translate('profile')}</span>
                      </span>
                    </span>
                  </Link>
                </li>
                <li className="m-nav__item">
                  <span className="m-nav__link cursor-pointer">
                    <i className="m-nav__link-icon fa fa-language"></i>
                    <span className="m-nav__link-title">
                      <span className="m-nav__link-wrap">
                        <span className="m-nav__link-text ng-scope" onClick={this.changeLanguage}>{translate('language')}</span>
                      </span>
                    </span>
                  </span>
                </li>
                <li className="m-nav__separator m-nav__separator--fit"></li>
                <li className="m-nav__item">
                  <span onClick={this.logout}
                    className="cursor-pointer btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
                    {translate('logout')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
