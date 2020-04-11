import crudSaga from 'redux/utils/crudSaga';
import { takeLatest, call, put, fork } from 'redux-saga/effects';
import { request } from 'api/utils';
import { handleError } from 'redux/utils/handleError';
import { RESOURCE, actions } from './slice';

function* getTypeSaga() {
  try {
    const response = yield call(
      request('get'),
      'offline/admin/company/audits/types',
    );
    if (response.data) {
      yield put(actions.getTypeSuccess(response.data));
    } else {
      throw response;
    }
  } catch (error) {
    yield fork(handleError, error);
  }
}

export default crudSaga(RESOURCE, actions, [
  takeLatest([actions.getType.type], getTypeSaga),
]);
