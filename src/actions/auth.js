import {setAccessToken} from 'utils';
import {ACTION_TYPES} from 'constants';

export function loginSuccess(user) {
  return dispatch => {
    setAccessToken(user.token);
    dispatch({
      type: ACTION_TYPES.LOGIN_SUCCESS,
      user: user.user_info
    });
  };
}
