import reduxAPI from 'redux-api';
import axiosRequest from './axios';

export default reduxAPI({
  login: {
    url: 'login',
    options: {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },
  logout: {
    url: 'logout',
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', axiosRequest).use('rootUrl', API_URL);
