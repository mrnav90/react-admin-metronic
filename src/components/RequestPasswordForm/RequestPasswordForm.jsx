import React, {Component} from 'react';
import Form from 'formsy-react';
import {Input, Button} from 'components/FormUI';
import {ForgotPassword} from 'api';
import {toastr} from 'react-redux-toastr';
import {translate} from 'utils';
import PropTypes from 'prop-types';

export default class RequestPasswordForm extends Component {
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
    ForgotPassword.actions.requestPassword.request({}, {data}).then(response => {
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
          <h3 className="m-login__title">{translate('forgot_password')}</h3>
          <div className="m-login__desc">{translate('forgot_password_description')}</div>
        </div>
        <Form className="m-login__form m-form" onInvalid={this.onInvalid} onValid={this.onValid} onValidSubmit={this.onValidSubmit}>
          <Input
            className="form-control m-input"
            type="text"
            name="email"
            placeholder={translate('email')}
            validations="isEmail"
            validationErrors={{isEmail: translate('email_valid')}}
            errors={this.state.errors}
            required
          />
          <div className="m-login__form-action">
            <Button
              type="submit"
              disabled={!this.state.isValid || this.state.isSubmit}
              className="btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary"
              label={translate('request')}
              loading={this.state.isSubmit}
            />
          </div>
        </Form>
      </div>
    );
  }
}
