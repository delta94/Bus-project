/* eslint-disable import/no-cycle */
import request from './request';

const authApi = {
  login: async (data) => {
    return request.post(`/auth/signin`, data);
  },
  signup: async (data) => {
    return request.post(`/auth/signup`, data);
  },
  getInfo: async () => {
    return request(`/auth/info`);
  },
  confirmEmail: async (data) => {
    return request.post(`/auth/forgot-password`, data);
  },
  resetPassword: async (data) => {
    return request.post(`/auth/change-password`, data);
  },
};

export default authApi;
