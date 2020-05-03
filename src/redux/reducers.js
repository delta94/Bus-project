/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/slice';
// import here
import cards from './cards/slice';
import transactions from './transactions/slice';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    // add here
    cards,
    transactions,
  });
