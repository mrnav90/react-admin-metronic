import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    label: PropTypes.string,
    loading: PropTypes.bool,
    size: PropTypes.string
  };

  static defaultProps = {
    type: 'button',
    size: '',
    className: '',
    color: '',
    disabled: false,
    icon: '',
    label: '',
    loading: false
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <button
        disabled={this.props.disabled}
        type={this.props.type}
        className={classnames('btn',
          this.props.className,
          this.props.size,
          this.props.color,
          {
            'm-btn--icon': this.props.icon,
            'm-loader m-loader--light m-loader--right': this.props.loading
          }
        )}>
        {this.props.icon ? (
          <span>
            <i className={this.props.icon}></i>
            <span>{this.props.label}</span>
          </span>
        ) : this.props.label}
      </button>
    );
  }
}
