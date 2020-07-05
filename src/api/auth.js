/* eslint-disable import/no-cycle */
import request from './request';

const authApi = {
  login: async (data) => {
    return request.post(`/auth/signin`, data);
  },
  getInfo: async () => {
    return request(`/auth/info`);
  },
};

export default authApi;
