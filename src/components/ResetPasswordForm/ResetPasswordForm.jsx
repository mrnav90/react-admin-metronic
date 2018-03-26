import React, {Component} from 'react';
import Form from 'formsy-react';
import {Input, Button} from 'components/FormUI';
import {ForgotPassword} from 'api';
import {toastr} from 'react-redux-toastr';
import {translate} from 'utils';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

@withRouter
export default class ResetPasswordForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    language: PropTypes.string,
    params: PropTypes.object,
    history: PropTypes.object
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
    data.token = this.props.params.token;
    this.setState({isSubmit: true});
    ForgotPassword.actions.resetPassword.request({}, {data}).then(response => {
      this.setState({isSubmit: false});
      toastr.success(translate('reset_your_password'), response.message);
      this.props.history.push('/');
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
        <Form className="m-login__form m-form" onInvalid={this.onInvalid} onValid={this.onValid} onValidSubmit={this.onValidSubmit} noValidate>
          <Input
            className="form-control m-input"
            type="text"
            name="email"
            placeholder={translate('email')}
            validations="isEmail"
            validationErrors={{isEmail: translate('email_valid')}}
            errors={this.state.errors}
            required
            messageRequired={translate('email_blank')}
          />
          <Input
            className="form-control m-input m-login__form-input--last"
            type="password"
            name="password"
            placeholder={translate('password')}
            validations="minLength:6"
            validationErrors={{minLength: translate('password_short')}}
            required
            messageRequired={translate('password_blank')}
          />
          <Input
            className="form-control m-input m-login__form-input--last"
            type="password"
            name="password_confirmation"
            placeholder={translate('confirmation_password')}
            validations={{minLength: 6, equalsField: 'password'}}
            validationErrors={{minLength: translate('password_short'), equalsField: translate('password_confirmation_match')}}
            required
            messageRequired={translate('password_confirmation_blank')}
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
