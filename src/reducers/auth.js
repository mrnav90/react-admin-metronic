import {ACTION_TYPES} from 'constants';
import {setUserInfo} from 'utils';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.CURRENT_USER:
      setUserInfo(action.user);
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    case ACTION_TYPES.LOGOUT:
      return {
        user: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
