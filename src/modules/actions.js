import { actions as auth } from './Auth/slice';
// import here
import { actions as users } from './Users/slice';
import { actions as transactions } from './Transactions/slice';

const actions = {
  auth,
  // add here
  users,
  transactions,
};

export default actions;
