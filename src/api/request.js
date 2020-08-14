/* eslint-disable no-param-reassign */
import axios from 'axios';
import { REACT_APP_SERVER_URL } from 'configs/constants';
import qs from 'query-string';

const request = axios.create({
  baseURL: `${REACT_APP_SERVER_URL}/api`,
  timeout: 10000,
  paramsSerializer: (params) => qs.stringify(params),
});

export default request;
