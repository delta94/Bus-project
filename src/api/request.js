/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import axios from 'axios';

const logger = (error) => {
  console.error('Request Failed:', error.config);
  if (error.response) {
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
  } else {
    console.error('Error Message:', error.message);
  }
};

const request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sessionToken');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response || error.message);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    logger(error);
    return Promise.reject(error.response || error.message);
  },
);

export default request;
