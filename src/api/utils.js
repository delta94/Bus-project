/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import axios from 'axios';

const TIME_OUT = 10000;

const requiredParam = (param) => {
  throw new Error(`${param} parameter is required`);
};

export function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .filter((k) => params[k] || params[k] === 0)
    .map((k) => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const request = (method) => async (
  url = requiredParam('URL'),
  data = null,
  baseURL = process.env.REACT_APP_SERVER_URL,
  headers = {},
) => {
  try {
    const token = localStorage.getItem('sessionToken');
    if (token) {
      headers = {
        ...headers,
        authorization: `Bearer ${token}`,
      };
    }
    const response = await axios({
      baseURL,
      timeout: TIME_OUT,
      method,
      headers,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.error('Request Failed:', error.config);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      console.error('Error Message:', error.message);
    }
    return Promise.reject(error.response || error.message);
  }
};

export const get = request('get');
export const post = request('post');
export const put = request('put');
export const patch = request('patch');
export const del = request('delete');
