import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ShowIf} from 'components/Utils';

class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    setValue: PropTypes.func,
    getErrorMessage: PropTypes.func,
    getValue: PropTypes.func,
    showError: PropTypes.func,
    errors: PropTypes.any
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    name: '',
    className: '',
    errors: [],
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
    if (nextProps.errors && nextProps.errors.length > 0) {
      const errors = [];
      nextProps.errors.map((value) => {
        if (value[this.props.name]) {
          value[this.props.name].map((error) => {
            errors.push(error);
          });
        }
      });
      this.setState({errors});
    }
  }

  onChange(e) {
    this.props.setValue(e.target.value);
  }

  render() {
    return (
      <div className={classnames('form-group m-form__group', {'has-danger': this.props.showError() || this.state.errors.length > 0})}>
        <input
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          name={this.props.name}
          autoComplete="off"
          onChange={this.onChange}
          disabled={this.props.disabled}
          value={this.props.getValue() || ''}
        />
        <ShowIf condition={this.state.errors.length > 0}>
          {
            this.state.errors.map((error, idx) => {
              return (
                <span key={idx} className="form-control-feedback block">{error}</span>
              );
            })
          }
        </ShowIf>
        {this.props.getErrorMessage() && <span className="form-control-feedback">{this.props.getErrorMessage()}</span>}
      </div>
    );
  }
}

export default withFormsy(Input);
