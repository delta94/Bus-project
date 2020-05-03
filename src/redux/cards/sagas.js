/* eslint-disable import/no-cycle */
import crudSaga from 'redux/utils/crudSaga';
import { RESOURCE, actions } from './slice';

export default crudSaga(RESOURCE, actions);
