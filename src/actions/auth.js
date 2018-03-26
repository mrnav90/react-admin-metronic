import {setAccessToken, revokeUser} from 'utils';
import {ACTION_TYPES} from 'constants';
import {Auth} from 'api';
import {translate} from 'utils';
import {toastr} from 'react-redux-toastr';

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
    return Auth.actions.logout.request().then(response => {
      toastr.success(translate('system'), response.message);
      revokeUser();
      dispatch({
        type: ACTION_TYPES.LOGOUT
      });
    }).catch(error => {
      toastr.success(translate('error'), error.message);
    });
  };
}
