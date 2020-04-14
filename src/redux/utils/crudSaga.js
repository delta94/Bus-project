import {
  call,
  put,
  takeLatest,
  takeEvery,
  select,
  fork,
} from 'redux-saga/effects';
import { replace } from 'connected-react-router';
import { notification } from 'antd';
import i18next from 'i18next';
import request from 'api/request';
import { handleError } from './handleError';

const crudSaga = (resource, actions, sagas = []) => {
  function* getAllSaga({ payload }) {
    try {
      yield put(actions.setLoading(true));
      const response = yield call(request, {
        ...payload,
        url: payload?.url || resource,
      });
      if (response.data) {
        yield put(actions.getAllDataSuccess(response));
        yield put(actions.setLoading(false));
      } else {
        throw response;
      }
    } catch (error) {
      yield fork(handleError, error);
      yield put(actions.setLoading(false));
    }
  }

  function* getByIdSaga({ payload }) {
    try {
      const response = yield call(request, {
        ...payload,
        url: payload?.url || resource,
      });
      if (response.data) {
        yield put(actions.getDataByIdSuccess(response.data));
      } else {
        throw response;
      }
    } catch (error) {
      yield fork(handleError, error);
    }
  }

  function* updateSaga({
    payload: { hasActionAfterSucess = true, method = 'post', ...payload },
    deferred,
  }) {
    try {
      const options = {
        post: {
          message: 'createSuccess',
          action: actions.createSuccess,
        },
        put: {
          message: 'editSuccess',
          action: actions.editSuccess,
        },
        patch: {
          message: 'editSuccess',
          action: actions.editSuccess,
        },
        delete: {
          message: 'deleteSuccess',
          action: actions.deleteByIdSuccess,
        },
      };
      const location = yield select((state) => state.router.location);
      const response = yield call(request, {
        ...payload,
        url: payload?.url || resource,
        method,
      });
      if (response) {
        // CHECK IF post, put, patch -> Call Action
        if (['post', 'put', 'patch'].includes(method)) {
          if (hasActionAfterSucess) {
            yield put(options[method].action(response));
          }
          yield put(replace(`${location.pathname}${location.search}`));
        } else if (hasActionAfterSucess) {
          yield put(options[method].action(payload?.id));
        }

        deferred.resolve();

        notification.success({
          message: i18next.t(options[method].message),
        });
      } else {
        throw response;
      }
    } catch (error) {
      yield fork(handleError, error);
      yield put(actions.getMessageError(error?.data?.message));
    }
  }

  return [
    takeLatest([actions.getAll().type], getAllSaga),
    takeLatest([actions.getById().type], getByIdSaga),
    takeEvery([actions.update().type], updateSaga),
    ...sagas,
  ];
};

export default crudSaga;
