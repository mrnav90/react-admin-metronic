import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

export default class MasterLayout extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="master-layout m-grid m-grid--hor m-grid--root m-page">
        {childrenWithProps}
        <ReduxToastr
          timeOut={4000}
          newestOnTop={true}
          preventDuplicates={false}
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar={true}
        />
      </div>
    );
  }
}
