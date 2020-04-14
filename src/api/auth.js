import request from './request';

export async function loginApi(data) {
  return request.post(`/auth/signin`, data);
}

export async function getInfoApi() {
  return request(`/auth/info`, null);
}
