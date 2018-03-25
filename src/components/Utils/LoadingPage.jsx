import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {translate} from 'utils';

export default class LoadingPage extends React.Component {
  static propTypes = {
    isShow: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames('m-page-loader m-page-loader--base m-page-loader--non-block', {'show-loader': this.props.isShow})}>
        <div className="m-blockui">
          <span>{translate('please_wait')}</span>
          <span><span className="m-loader m-loader--brand"></span></span>
        </div>
      </div>
    );
  }
}
