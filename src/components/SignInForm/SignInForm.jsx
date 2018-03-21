import React, {Component} from 'react';
import Form from 'formsy-react';
import {Link} from 'react-router-dom';
import {Input, Checkbox} from 'components/FormUI';

export default class SignInForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isSubmit: false,
      isValid: true,
      errors: []
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
    this.setState({
      errors: [
        {
          email: [
            'Email invalid',
            'Email is require'
          ]
        }
      ]
    });
    console.log(data);
  }

  render() {
    return (
      <div className="m-login__container">
        <div className="m-login__head">
          <h3 className="m-login__title">Sign In</h3>
        </div>
        <Form className="m-login__form m-form" onInvalid={this.onInvalid} onValid={this.onValid} onValidSubmit={this.onValidSubmit}>
          <Input
            className="form-control m-input"
            type="text"
            name="email"
            placeholder="Email"
            validations="isEmail"
            errors={this.state.errors}
            validationErrors={{isEmail: 'Email not valid'}}
            required
          />
          <Input
            className="form-control m-input m-login__form-input--last"
            type="password"
            name="password"
            placeholder="Password"
            validations="minLength:6"
            errors={this.state.errors}
            validationErrors={{minLength: 'Password too short'}}
            required
          />
          <div className="row m-login__form-sub">
            <div className="col m--align-left m-login__form-left">
              <Checkbox
                name="remember"
                className="m-checkbox--focus"
                title="Remember me"
              />
            </div>
            <div className="col m--align-right m-login__form-right">
              <Link to="/request-password" className="m-link">Forget Password ?</Link>
            </div>
          </div>
          <div className="m-login__form-action">
            <button type="submit" disabled={!this.state.isValid} className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary">
              Sign In
            </button>
          </div>
        </Form>
      </div>
    );
  }
}
