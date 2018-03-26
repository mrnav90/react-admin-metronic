import {connect} from 'react-redux';
import {Switch} from 'react-router-dom';

const mapStateToProps = state => {
  return {
    location: state.routing.location
  };
};

const AppSwitchRouter = connect(mapStateToProps)(Switch);

export default AppSwitchRouter;
