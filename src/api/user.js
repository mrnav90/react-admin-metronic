import reduxAPI from 'redux-api';
import axiosRequest from './axios';

export default reduxAPI({
  profile: {
    url: 'admin/calling-users/profile',
    options: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
}).use('fetch', axiosRequest).use('rootUrl', API_URL);
