import { all } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import auth from './auth/sagas';
// import here
import balances from './balances/sagas';
import staff from './staff/sagas';
import audit from './audit/sagas';
import topup from './topup/sagas';
import companies from './companies/sagas';
import branches from './branches/sagas';
import transactions from './transactions/sagas';
import categories from './categories/sagas';
import guides from './guides/sagas';

export default function* root() {
  yield all([
    ...auth,
    // add here
    ...balances,
    ...staff,
    ...audit,
    ...topup,
    ...categories,
    ...companies,
    ...branches,
    ...transactions,
    ...guides,
  ]);
}
