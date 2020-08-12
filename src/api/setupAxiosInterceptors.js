/* eslint-disable no-param-reassign */
import { logger } from 'utils/logger';
import axios from 'axios';
import { unwrapResult } from '@reduxjs/toolkit';

let isRefreshing = false;
const subscribers = [];

const onRefreshed = (authorisationToken) => {
  subscribers.map((cb) => cb(authorisationToken));
};

const subscribeTokenRefresh = (cb) => {
  subscribers.push(cb);
};

const setupAxiosInterceptors = ({
  request,
  store,
  refreshTokenAction,
  logoutAction,
}) => {
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
      const {
        config,
        response: { status },
      } = error;
      const originalRequest = config;
      logger(error);
      if (status === 401) {
        if (!isRefreshing) {
          store
            .dispatch(refreshTokenAction())
            .then(unwrapResult)
            .then((payload) => {
              isRefreshing = true;
              onRefreshed(payload.accessToken);
            })
            .catch(() => {
              store.dispatch(logoutAction());
            });
        }
        const retryOriginalRequest = new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            originalRequest.headers.authorization = `Bearer ${token}`;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest;
      }
      return Promise.reject(error.response || error.message);
    },
  );
};

export default setupAxiosInterceptors;
