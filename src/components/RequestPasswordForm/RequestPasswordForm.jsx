import React, {Component} from 'react';

export default class RequestPasswordForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="m-login__container">
        <div className="m-login__head">
          <h3 className="m-login__title">Forgotpassword ?</h3>
          <div className="m-login__desc">Enter your email to reset your password:</div>
        </div>
        <form className="m-login__form m-form" action="">
          <div className="form-group m-form__group">
            <input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off"/>
          </div>
          <div className="m-login__form-action">
            <button className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primaryr">Request</button>&nbsp;&nbsp;
          </div>
        </form>
        <div className="m-login__account">
          <span className="m-login__account-msg">
            Don't have an account yet ?
          </span>
          &nbsp;&nbsp;
          <a href="javascript:;" className="m-link m-link--light m-login__account-link">
            Sign Up
          </a>
        </div>
      </div>
    );
  }
}
