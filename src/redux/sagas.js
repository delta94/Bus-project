/* eslint-disable import/no-cycle */
import { all } from 'redux-saga/effects';
import cards from './cards/sagas';
import transactions from './transactions/sagas';

export default function* root() {
  yield all([
    // add here
    ...cards,
    ...transactions,
  ]);
}
