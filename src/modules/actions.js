import { actions as auth } from './Auth/slice';
// import here
import { actions as cards } from './Cards/slice';
import { actions as transactions } from './Transactions/slice';

const actions = {
  auth,
  // add here
  cards,
  transactions,
};

export default actions;
