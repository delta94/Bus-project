import Action from 'redux/utils/actions';
import { showError } from 'redux/utils/exception';
import { put, delay } from 'redux-saga/effects';

export function* handleError(error) {
  if (error.status === 401) {
    showError(error?.data);
    yield delay(2000);
    yield put(Action.auth.logout());
  } else {
    showError(error);
  }
}
