/* eslint-disable import/no-cycle */
import request from './request';

export async function getAnalyticApi(params) {
  return request(`/transactions/analysis`, {
    params,
  });
}

export async function getPredictApi() {
  return request(`/transactions/predict`);
}
