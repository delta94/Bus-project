/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './Auth/slice';
// import here
import users from './Users/slice';
import transactions from './Transactions/slice';
import trips from './Trips/slice';
import drivers from './Drivers/slice';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    // add here
    users,
    transactions,
    trips,
    drivers,
  });
