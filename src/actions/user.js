import {ACTION_TYPES} from 'constants';
import {User} from 'api';

export function getUserInfo() {
  return dispatch => {
    return User.actions.profile.request().then(response => {
      dispatch({
        type: ACTION_TYPES.CURRENT_USER,
        user: response.data
      });
    });
  };
}
