import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import translation from './translation';
import {translationWithStore} from 'utils';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
  routing: routerReducer,
  i18n: translation,
  toastr: toastrReducer
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

translationWithStore(store);

export {store, rootReducer};
