import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { loginApi, getInfoApi } from 'api/auth';
// eslint-disable-next-line import/no-cycle
import { history } from 'redux/store';
import { showError } from 'redux/utils/exception';
import actions from 'redux/utils/actions';

function* loginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload.data);
    if (response.data) {
      yield put(actions.auth.loginSuccess());
      localStorage.setItem('sessionToken', response.data.token);
      history.push('/companies');
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
    if (error.status === 401) {
      showError(error?.data);
      yield delay(2000);
      yield put(actions.auth.logout());
    } else {
      showError(error?.data);
    }
  }
}

export default [
  takeEvery([actions.auth.login.type], loginSaga),
  takeEvery([actions.auth.getInfo.type], getInfoSaga),
];
