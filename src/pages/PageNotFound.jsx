import React, {Component} from 'react';
import {MasterLayout} from 'components/Layout';

export default class PageNotFound extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MasterLayout>
        <div className="m-grid__item m-grid__item--fluid m-grid m-error-1">
          <div className="m-error_container">
            <span className="m-error_number">
              <h1>404</h1>
            </span>
            <p className="m-error_desc">
              OOPS! Something went wrong here
            </p>
          </div>
        </div>
      </MasterLayout>
    );
  }
}
