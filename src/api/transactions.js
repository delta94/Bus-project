import request from './request';

export async function getAnalyticApi(params) {
  return request(`/transactions/analysis`, {
    params,
  });
}
