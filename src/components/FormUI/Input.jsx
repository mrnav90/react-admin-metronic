import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ShowIf} from 'components/Utils';

@withFormsy
export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    setValue: PropTypes.func,
    getErrorMessage: PropTypes.func,
    getValue: PropTypes.func,
    onChange: PropTypes.func,
    showError: PropTypes.func,
    errors: PropTypes.object,
    required: PropTypes.bool,
    isPristine: PropTypes.func,
    isValid: PropTypes.func,
    showRequired: PropTypes.func,
    messageRequired: PropTypes.string
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    name: '',
    className: '',
    errors: {},
    disabled: false
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      const errors = [];
      for (const key in nextProps.errors) {
        if (this.props.name === key) {
          nextProps.errors[key].map(error => {
            errors.push(error);
          });
        }
      }
      this.setState({errors});
    }
  }

  onChange(e) {
    this.props.setValue(e.target.value);
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    const isRequired = !this.props.isPristine() && !this.props.isValid() && this.props.showRequired();
    return (
      <div className={classnames('form-group m-form__group', {'has-danger': this.props.showError() || this.state.errors.length > 0 || isRequired})}>
        <input
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          name={this.props.name}
          autoComplete="off"
          onChange={this.onChange}
          disabled={this.props.disabled}
          value={this.props.getValue() || ''}
          required={this.props.required}
        />
        <ShowIf condition={this.state.errors.length > 0}>
          {
            this.state.errors.map((error, idx) => {
              return (
                <span key={idx} className="form-control-feedback d-block">{error}</span>
              );
            })
          }
        </ShowIf>
        {isRequired && <span className="form-control-feedback">{this.props.messageRequired}</span>}
        {this.props.getErrorMessage() && <span className="form-control-feedback">{this.props.getErrorMessage()}</span>}
      </div>
    );
  }
}
