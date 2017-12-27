import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PageNotFound extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="page-not-found">
        <div className="ui middle center aligned grid">
          <div className="column">
            <h1>404</h1>
            <p>oops.. page not found</p>
            <Link to="/">Comback Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
}
