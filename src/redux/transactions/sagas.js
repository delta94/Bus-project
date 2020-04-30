import crudSaga from 'redux/utils/crudSaga';
import { takeLatest, fork, call, put } from 'redux-saga/effects';
import { handleError } from 'redux/utils/handleError';
import { getAnalyticApi } from 'api/transactions';
import { RESOURCE, actions } from './slice';

function* getAnalyticSaga() {
  try {
    const response = yield call(getAnalyticApi, {
      startTime: '2020-04-28',
      endTime: '2020-04-28',
    });
    if (response.data) {
      yield put(actions.getAnalyticSuccess(response.data));
    } else {
      throw response;
    }
  } catch (error) {
    yield fork(handleError, error);
  }
}

export default crudSaga(RESOURCE, actions, [
  takeLatest([actions.getAnalytic.type], getAnalyticSaga),
]);
