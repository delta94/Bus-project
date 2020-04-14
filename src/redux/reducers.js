import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/slice';
// import here
import cards from './cards/slice';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    // add here./cards/slice
    cards,
  });
