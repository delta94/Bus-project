import crudSaga from 'redux/utils/crudSaga';
import {
  takeEvery,
  put,
  select,
  call,
  delay,
  takeLatest,
} from 'redux-saga/effects';
import {
  putDataApi,
  patchDataApi,
  postDataApi,
  getDataByIdApi,
} from 'api/crud';
import { showError } from 'redux/utils/exception';
import { notification } from 'antd';
import { replace } from 'connected-react-router';
import i18next from 'i18next';
import Action from 'redux/utils/actions';
import { RESOURCE, actions } from './slice';

function* createLoyaltyProgramSaga({ payload }) {
  try {
    const location = yield select((state) => state.router.location);
    const response = yield call(postDataApi, {
      resource: payload?.customResource,
      data: payload?.data,
    });
    if (response.data) {
      yield put(actions.editLoyaltyProgramSuccess(response.data));
      yield put(replace(`${location.pathname}${location.search}`));
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
      yield put(actions.getMessageError(error?.data.message));
      showError(error?.data);
    }
  }
}

function* editLoyaltyProgramSaga({ payload }) {
  try {
    const location = yield select((state) => state.router.location);
    const response = yield call(putDataApi, {
      resource: payload?.customResource,
      id: payload?.id,
      data: payload?.data,
    });
    if (response.data) {
      yield put(actions.editLoyaltyProgramSuccess(response.data));
      yield put(replace(`${location.pathname}${location.search}`));
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
      yield put(actions.getMessageError(error?.data.message));
      showError(error?.data);
    }
  }
}

function* editMileStonesLoyaltySaga({ payload }) {
  try {
    const location = yield select((state) => state.router.location);
    const response = yield call(patchDataApi, {
      resource: payload?.customResource,
      id: payload?.id,
      data: payload?.data,
    });
    if (response.data) {
      yield put(actions.editLoyaltyProgramSuccess(response.data));
      yield put(replace(`${location.pathname}${location.search}`));
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
      yield put(actions.getMessageError(error?.data.message));
      showError(error?.data);
    }
  }
}

function* getSummarySaga({ payload }) {
  try {
    const response = yield call(getDataByIdApi, {
      resource: `company/companies/${payload?.id}/summary`,
    });
    if (response.data) {
      yield put(actions.getSummarySuccess(response.data));
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

export default crudSaga(RESOURCE, actions, [
  takeEvery([actions.editLoyaltyProgram().type], editLoyaltyProgramSaga),
  takeEvery([actions.editMileStonesLoyalty().type], editMileStonesLoyaltySaga),
  takeEvery([actions.createLoyaltyProgram().type], createLoyaltyProgramSaga),
  takeLatest([actions.getSummary().type], getSummarySaga),
]);
