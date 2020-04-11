import { showError } from 'redux/utils/exception';
import {
  call,
  put,
  takeLatest,
  takeEvery,
  select,
  delay,
} from 'redux-saga/effects';
import {
  getAllDataApi,
  getDataByIdApi,
  postDataApi,
  deleteDataByIdApi,
  putDataApi,
  patchDataApi,
} from 'api/crud';
import { replace } from 'connected-react-router';
import { notification } from 'antd';
import i18next from 'i18next';
import Action from './actions';

const crudSaga = (resource, actions, sagas = []) => {
  function* getAllDataSaga({ payload }) {
    try {
      yield put(actions.setLoading(true));
      const response = yield call(getAllDataApi, {
        resource: payload?.customResource || resource,
        query: payload?.query,
        customURL: payload?.customURL,
        headers: payload?.headers,
        prefix: payload?.prefix,
      });
      if (response.data) {
        yield put(actions.getAllDataSuccess(response.data));
        yield put(actions.setLoading(false));
      } else {
        throw response;
      }
    } catch (error) {
      if (error.status === 401) {
        showError(error?.data);
        yield delay(2000);
        yield put(Action.auth.logout());
      } else {
        yield put(actions.setLoading(false));
        showError(error?.data);
      }
    }
  }

  function* getDataByIdSaga({ payload }) {
    try {
      const response = yield call(getDataByIdApi, {
        resource: payload?.customResource || resource,
        id: payload?.id,
        query: payload?.query,
        customURL: payload?.customURL,
        headers: payload?.headers,
        prefix: payload?.prefix,
      });
      if (response.data) {
        yield put(actions.getDataByIdSuccess(response.data));
      } else {
        throw response;
      }
    } catch (error) {
      if (error.status === 401) {
        showError(error?.data);
        yield delay(2000);
        yield put(Action.auth.logout());
      } else {
        showError(error?.data);
      }
    }
  }
  function* editDataSaga({
    payload: { method = 'PUT', ...payload },
    deferred,
  }) {
    try {
      const options = {
        PUT: {
          type: putDataApi,
        },
        PATCH: {
          type: patchDataApi,
        },
      };
      const location = yield select((state) => state.router.location);
      const response = yield call(options[method].type, {
        resource: payload?.customResource || resource,
        id: payload?.id,
        data: payload?.data,
        customURL: payload?.customURL,
        headers: payload?.headers,
        prefix: payload?.prefix,
      });
      if (response.data) {
        yield put(actions.editDataSuccess(response.data));
        yield put(replace(`${location.pathname}${location.search}`));
        deferred.resolve();
        notification.success({
          message: i18next.t('editSuccess'),
        });
      } else {
        throw response;
      }
    } catch (error) {
      if (error.status === 401) {
        showError(error?.data);
        yield delay(2000);
        yield put(Action.auth.logout());
      } else {
        showError(error?.data);
        yield put(actions.getMessageError(error?.data?.message));
        yield delay(2000);
        yield put(actions.getMessageError(null));
      }
    }
  }

  function* createDataSaga({ payload, deferred }) {
    try {
      const location = yield select((state) => state.router.location);
      const response = yield call(postDataApi, {
        resource: payload?.customResource || resource,
        data: payload?.data,
        customURL: payload?.customURL,
        headers: payload?.headers,
        prefix: payload?.prefix,
      });
      if (response.data) {
        yield put(actions.createDataSuccess(response.data));
        yield put(replace(`${location.pathname}${location.search}`));
        deferred.resolve();
        notification.success({
          message: i18next.t('createSuccess'),
        });
      } else {
        throw response;
      }
    } catch (error) {
      if (error.status === 401) {
        showError(error?.data);
        yield delay(2000);
        yield put(Action.auth.logout());
      } else {
        yield put(actions.getMessageError(error?.data?.message));
        showError(error?.data);
      }
    }
  }

  function* deleteDataByIdSaga({ payload, deferred }) {
    try {
      const response = yield call(deleteDataByIdApi, {
        resource: payload?.customResource || resource,
        id: payload?.id,
        customURL: payload?.customURL,
        headers: payload?.headers,
        prefix: payload?.prefix,
      });
      if (response.data) {
        // yield put(actions.getDataByIdSuccess(response.data));
        deferred.resolve();
        notification.success({
          message: i18next.t('deleteSuccess'),
        });
      } else {
        throw response;
      }
    } catch (error) {
      if (error.status === 401) {
        showError(error?.data);
        yield delay(2000);
        yield put(Action.auth.logout());
      } else {
        yield put(actions.getMessageError(error?.data?.message));
        showError(error?.data);
      }
    }
  }

  function* customDataSaga({
    payload: { hasActionAfterSucess = true, ...payload },
    deferred,
  }) {
    try {
      const options = {
        POST: {
          type: postDataApi,
          message: 'createSuccess',
          action: actions.createDataSuccess,
        },
        PUT: {
          type: putDataApi,
          message: 'editSuccess',
          action: actions.editDataSuccess,
        },
        PATCH: {
          type: patchDataApi,
          message: actions.editDataSuccess,
        },
        DELETE: {
          type: deleteDataByIdApi,
          message: 'deleteSuccess',
        },
      };
      const location = yield select((state) => state.router.location);
      const response = yield call(options[payload?.method].type, {
        resource: payload?.customResource || resource,
        id: payload?.id,
        data: payload?.data,
        customURL: payload?.customURL,
        headers: payload?.headers,
        prefix: payload?.prefix,
      });
      if (response.data) {
        deferred.resolve();

        // CHECK IF POST, PUT, PATCH -> Call Action
        if (['POST', 'PUT', 'PATCH'].includes(payload?.method)) {
          if (hasActionAfterSucess) {
            yield put(options[payload?.method].action(response?.data));
          }
          yield put(replace(`${location.pathname}${location.search}`));
        } else if (hasActionAfterSucess) {
          yield put(options[payload?.method].action(payload?.id));
        }

        if (options[payload?.method].message) {
          notification.success({
            message: i18next.t(options[payload?.method].message),
          });
        }
      } else {
        throw response;
      }
    } catch (error) {
      if (error.status === 401) {
        showError(error?.data);
        yield delay(2000);
        yield put(Action.auth.logout());
      } else {
        yield put(actions.getMessageError(error?.data?.message));
        yield put(actions.setLoading(false));
        showError(error?.data);
      }
    }
  }

  return [
    takeLatest([actions.getAllData().type], getAllDataSaga),
    takeLatest([actions.getDataById().type], getDataByIdSaga),
    takeEvery([actions.createData().type], createDataSaga),
    takeEvery([actions.deleteDataById().type], deleteDataByIdSaga),
    takeEvery([actions.editData().type], editDataSaga),
    takeEvery([actions.customData().type], customDataSaga),
    ...sagas,
  ];
};

export default crudSaga;
