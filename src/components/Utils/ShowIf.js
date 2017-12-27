import React from 'react';
import {PropTypes} from 'prop-types';

export default class ShowIf extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static proptTypes = {
    condition: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  render() {
    if (this.props.condition) {
      return this.props.children;
    } else {
      return null;
    }
  }
}
