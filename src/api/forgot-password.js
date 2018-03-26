import reduxAPI from 'redux-api';
import axiosRequest from './axios';

export default reduxAPI({
  requestPassword: {
    url: 'admin/password/email',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  resetPassword: {
    url: 'admin/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', axiosRequest).use('rootUrl', API_URL);
