/* eslint-disable import/no-cycle */
import crudSaga from 'redux/utils/crudSaga';
import { actions, RESOURCE } from './slice';

export default crudSaga(RESOURCE, actions);
