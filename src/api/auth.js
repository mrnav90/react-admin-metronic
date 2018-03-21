import reduxAPI from 'redux-api';
import axiosRequest from './axios';

export default reduxAPI({
  login: {
    url: 'admin/login',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  logout: {
    url: 'admin/logout',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', axiosRequest).use('rootUrl', API_URL);
