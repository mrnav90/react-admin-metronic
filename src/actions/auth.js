import {setAccessToken, revokeUser} from 'utils';
import {ACTION_TYPES} from 'constants';

export function loginSuccess(user) {
  return dispatch => {
    setAccessToken(user.token);
    dispatch({
      type: ACTION_TYPES.CURRENT_USER,
      user: user.user_info
    });
  };
}

export function logout() {
  return dispatch => {
    revokeUser();
    dispatch({
      type: ACTION_TYPES.LOGOUT
    });
  };
}
