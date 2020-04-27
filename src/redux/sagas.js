import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import auth from './auth/sagas';
import cards from './cards/sagas';
import transactions from './transactions/sagas';

export default function* root() {
  yield all([
    ...auth,
    // add here
    ...cards,
    ...transactions,
  ]);
}
