import axios from 'axios';

axios.interceptors.request.use((config) => {
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
