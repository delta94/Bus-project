import { post, get } from './utils';

export async function loginApi(data) {
  return post(`/auth/signin`, data);
}

export async function getInfoApi() {
  return get(`/auth/info`, null);
}
