import React, {Component} from 'react';

export default class SignInForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="m-login__container">
        <div className="m-login__head">
          <h3 className="m-login__title">Sign In</h3>
        </div>
        <form className="m-login__form m-form" action="">
          <div className="form-group m-form__group">
            <input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off"/>
          </div>
          <div className="form-group m-form__group">
            <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password"/>
          </div>
          <div className="row m-login__form-sub">
            <div className="col m--align-left m-login__form-left">
              <label className="m-checkbox  m-checkbox--focus">
                <input type="checkbox" name="remember"/>
                Remember me
                <span></span>
              </label>
            </div>
            <div className="col m--align-right m-login__form-right">
              <a href="javascript:;" className="m-link">
                Forget Password ?
              </a>
            </div>
          </div>
          <div className="m-login__form-action">
            <button className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">
              Sign In
            </button>
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
