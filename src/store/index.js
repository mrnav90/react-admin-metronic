import {createStore, applyMiddleware} from 'redux';
import {translationWithStore} from 'utils';
import reduxThunk from 'redux-thunk';
import rootReducer from 'reducers';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
translationWithStore(store);

export default store;
