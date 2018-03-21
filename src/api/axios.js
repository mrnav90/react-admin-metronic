import axios from 'axios';

export default function axiosRequest(url, options) {
  return axios(url, options);
}
