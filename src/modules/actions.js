import { actions as auth } from './Auth/slice';
// import here
import { actions as users } from './Users/slice';
import { actions as transactions } from './Transactions/slice';
import { actions as trips } from './Trips/slice';
import { actions as drivers } from './Drivers/slice';

const actions = {
  auth,
  // add here
  users,
  drivers,
  trips,
  transactions,
};

export default actions;
