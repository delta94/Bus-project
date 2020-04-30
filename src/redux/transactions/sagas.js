import crudSaga from 'redux/utils/crudSaga';
import { takeLatest, fork, call, put } from 'redux-saga/effects';
import { handleError } from 'redux/utils/handleError';
import { getAnalyticApi } from 'api/transactions';
import { RESOURCE, actions } from './slice';

function* getAnalyticSaga({ payload }) {
  try {
    const response = yield call(getAnalyticApi, payload);
    if (response.data) {
      yield put(actions.getAnalyticSuccess(response.data));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(actions.getAnalyticFailure());
    yield fork(handleError, error);
  }
}

export default crudSaga(RESOURCE, actions, [
  takeLatest([actions.getAnalytic.type], getAnalyticSaga),
]);
