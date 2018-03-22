import axios from 'axios';
import {isAuthenticated, getAccessToken, getLanguage} from 'utils';
import {REQUEST_HEADER, DEFAULT_LANGUAGE} from 'constants';

axios.interceptors.request.use((config) => {
  if (isAuthenticated()) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  }
  config.headers.Language = getLanguage() ? getLanguage() : DEFAULT_LANGUAGE;
  Object.assign(config.headers, REQUEST_HEADER);
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  const statusCode = error.status;
  switch (statusCode) {
    case 401: break;
    case 403: break;
    case 404: break;
    case 500: break;
    default: break;
  }
  return Promise.reject(error.response.data);
});
