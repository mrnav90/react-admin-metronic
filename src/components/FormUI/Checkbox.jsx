import React, {Component} from 'react';
import {withFormsy} from 'formsy-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
    checkboxValue: PropTypes.string,
    disabled: PropTypes.bool,
    setValue: PropTypes.func,
    getValue: PropTypes.func
  };

  static defaultProps = {
    title: '',
    name: '',
    className: '',
    checkboxValue: '',
    disabled: false
  }

  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.setValue(e.target.checked);
  }

  render() {
    return (
      <label htmlFor={this.props.name} className={classnames('m-checkbox', this.props.className)}>
        {this.props.title}
        <input
          type="checkbox"
          id={this.props.name}
          className={this.props.className}
          name={this.props.name}
          onChange={this.onChange}
          disabled={this.props.disabled}
          value={this.props.checkboxValue}
          checked={this.props.getValue() || false}
        />
        <span></span>
      </label>
    );
  }
}

export default withFormsy(Checkbox);
