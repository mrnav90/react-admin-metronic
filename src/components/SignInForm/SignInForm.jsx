import React, {Component} from 'react';
import Form from 'formsy-react';
import {Link} from 'react-router-dom';
import {Input, Button} from 'components/FormUI';
import {Auth} from 'api';
import {toastr} from 'react-redux-toastr';
import {translate} from 'utils';
import {connect} from 'react-redux';
import {changeLanguage} from 'actions';
import PropTypes from 'prop-types';

@connect(state => ({
  language: state.i18n.locale
}))

export default class SignInForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    language: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSubmit: false,
      isValid: true,
      errors: {}
    };
    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
    this.onValidSubmit = this.onValidSubmit.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onValid() {
    this.setState({isValid: true});
  }

  onInvalid() {
    this.setState({isValid: false});
  }

  onChange() {
    if (Object.keys(this.state.errors).length > 0) {
      this.setState({errors: {}});
    }
  }

  changeLanguage() {
    const key = this.props.language === 'en' ? 'ja' : 'en';
    this.props.dispatch(changeLanguage(key));
  }

  onValidSubmit(data) {
    this.setState({isSubmit: true});
    Auth.actions.login.request({}, {data}).then(response => {
      this.setState({isSubmit: false});
      toastr.success(translate('authenticated'), response.message);
    }).catch(error => {
      this.setState({isSubmit: false, errors: error.errors});
      toastr.error(translate('error'), error.message);
    });
  }

  render() {
    return (
      <div className="m-login__container">
        <div className="m-login__head">
          <h3 className="m-login__title">{translate('admin_login')}</h3>
        </div>
        <Form className="m-login__form m-form" onInvalid={this.onInvalid} onValid={this.onValid} onValidSubmit={this.onValidSubmit}>
          <Input
            className="form-control m-input"
            type="text"
            name="email"
            onChange={this.onChange}
            placeholder={translate('email')}
            validations="isEmail"
            validationErrors={{isEmail: translate('email_valid')}}
            errors={this.state.errors}
            required
          />
          <Input
            className="form-control m-input m-login__form-input--last"
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder={translate('password')}
            validations="minLength:6"
            errors={this.state.errors}
            validationErrors={{minLength: translate('password_short')}}
            required
          />
          <div className="row m-login__form-sub">
            <div className="col m--align-left m-login__form-left">
              <span className="cursor-pointer" onClick={this.changeLanguage}>{translate('language')}</span>
            </div>
            <div className="col m--align-right m-login__form-right">
              <Link to="/request-password" className="m-link">{translate('forgot_password')}</Link>
            </div>
          </div>
          <div className="m-login__form-action">
            <Button
              type="submit"
              disabled={!this.state.isValid || this.state.isSubmit}
              className="btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary"
              label={translate('sign_in')}
              loading={this.state.isSubmit}
            />
          </div>
        </Form>
      </div>
    );
  }
}
