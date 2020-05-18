/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './Auth/slice';
// import here
import cards from './Cards/slice';
import transactions from './Transactions/slice';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    // add here
    cards,
    transactions,
  });
