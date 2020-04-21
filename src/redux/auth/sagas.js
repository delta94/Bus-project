import { call, put, takeEvery, fork, takeLatest } from 'redux-saga/effects';
import { loginApi, getInfoApi } from 'api/auth';
// eslint-disable-next-line import/no-cycle
import { history } from 'redux/store';
import { showError } from 'redux/utils/exception';
import actions from 'redux/utils/actions';
import { handleError } from 'redux/utils/handleError';

function* loginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload.data);
    if (response.data) {
      yield put(actions.auth.loginSuccess());
      localStorage.setItem('sessionToken', response.data.token);
      history.push('/');
    } else {
      throw response;
    }
  } catch (error) {
    yield put(actions.auth.getMessageError(error.data.message));
    showError(error?.data);
  }
}

function* getInfoSaga() {
  try {
    const response = yield call(getInfoApi);
    if (response.data) {
      yield put(actions.auth.getInfoSuccess(response.data));
    } else {
      throw response;
    }
  } catch (error) {
    yield fork(handleError, error);
  }
}

export default [
  takeEvery([actions.auth.login.type], loginSaga),
  takeLatest([actions.auth.getInfo.type], getInfoSaga),
];
