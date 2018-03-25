import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default class DateTime extends Component {
  static propTypes = {
    format: PropTypes.string,
    date: PropTypes.string.isRequired
  }

  render() {
    const format = this.props.format ? this.props.format : 'MM/DD/YYYY HH:mm';
    return (
      <span>{moment(Date.parse(this.props.date)).format(format)}</span>
    );
  }
}
