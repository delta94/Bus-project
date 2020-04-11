/* eslint-disable no-empty */
import crudSaga from 'redux/utils/crudSaga';
import { putDataApi } from 'api/crud';
import { call, takeEvery, put } from 'redux-saga/effects';
import { RESOURCE, actions } from './slice';

function* changeStatusSaga({ payload, deferred }) {
  try {
    yield put(actions.changeLoadingStatus(true));
    yield call(putDataApi, {
      resource: payload?.customResource,
      id: payload?.id,
      data: payload?.data,
      customURL: payload?.customURL,
      headers: payload?.headers,
      prefix: payload?.prefix,
    });
    yield put(actions.changeLoadingStatus(false));
  } catch (error) {
    yield put(actions.changeLoadingStatus(false));
    deferred.resolve();
  }
}

export default crudSaga(RESOURCE, actions, [
  takeEvery([actions.changeStatus().type], changeStatusSaga),
]);
