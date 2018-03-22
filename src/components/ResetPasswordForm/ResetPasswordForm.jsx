import React, {Component} from 'react';
import Form from 'formsy-react';
import {Input, Button} from 'components/FormUI';
import {ForgotPassword} from 'api';
import {toastr} from 'react-redux-toastr';
import {translate} from 'utils';
import PropTypes from 'prop-types';

export default class ResetPasswordForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    language: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSubmit: false,
      isValid: true
    };
    this.onValid = this.onValid.bind(this);
    this.onInvalid = this.onInvalid.bind(this);
    this.onValidSubmit = this.onValidSubmit.bind(this);
  }

  onValid() {
    this.setState({isValid: true});
  }

  onInvalid() {
    this.setState({isValid: false});
  }

  onValidSubmit(data) {
    this.setState({isSubmit: true});
    ForgotPassword.actions.resetPassword.request({}, {data}).then(response => {
      this.setState({isSubmit: false});
      toastr.success(translate('reset_your_password'), response.message);
    }).catch(error => {
      this.setState({isSubmit: false, errors: error.errors});
      toastr.error(translate('error'), error.message);
    });
  }

  render() {
    return (
      <div className="m-login__container">
        <div className="m-login__head">
          <h3 className="m-login__title">{translate('reset_your_password')}</h3>
        </div>
        <Form className="m-login__form m-form" onInvalid={this.onInvalid} onValid={this.onValid} onValidSubmit={this.onValidSubmit}>
          <Input
            className="form-control m-input m-login__form-input--last"
            type="password"
            name="password"
            placeholder={translate('password')}
            validations="minLength:6"
            validationErrors={{minLength: translate('password_short')}}
            required
          />
          <Input
            className="form-control m-input m-login__form-input--last"
            type="password"
            name="confirmation_password"
            placeholder={translate('confirmation_password')}
            validations={{minLength: 6, equalsField: 'password'}}
            validationErrors={{minLength: translate('password_short'), equalsField: translate('password_confirmation_match')}}
            required
          />
          <div className="m-login__form-action">
            <Button
              type="submit"
              disabled={!this.state.isValid || this.state.isSubmit}
              className="btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary"
              label={translate('change_password')}
              loading={this.state.isSubmit}
            />
          </div>
        </Form>
      </div>
    );
  }
}
