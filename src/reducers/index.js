import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import translation from './translation';
import auth from './auth';
import {reducer as toastrReducer} from 'react-redux-toastr';

export default combineReducers({
  routing: routerReducer,
  i18n: translation,
  toastr: toastrReducer,
  auth
});
