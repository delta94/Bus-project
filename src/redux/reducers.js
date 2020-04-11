import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/slice';
// import here
import balances from './balances/slice';
import staff from './staff/slice';
import audit from './audit/slice';
import topup from './topup/slice';
import companies from './companies/slice';
import branches from './branches/slice';
import transactions from './transactions/slice';
import categories from './categories/slice';
import guides from './guides/slice';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    // add here
    balances,
    staff,
    audit,
    topup,
    companies,
    branches,
    transactions,
    categories,
    guides,
  });
