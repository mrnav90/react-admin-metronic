import React from 'react';
import {PropTypes} from 'prop-types';

export default class ShowIf extends React.Component {
  static propTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.condition ? this.props.children : null;
  }
}
