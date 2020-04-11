import { post, get } from './utils';

export async function loginApi(data) {
  return post(`/admin/user/login`, data, 'https://svc.cashbagmain.com');
}

export async function getInfoApi() {
  return get(`/admin/user/me`, null, 'https://svc.cashbagmain.com');
}
