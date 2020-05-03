/* eslint-disable import/no-cycle */
import { actions as auth } from '../auth/slice';
// import here
import { actions as cards } from '../cards/slice';
import { actions as transactions } from '../transactions/slice';

const actions = {
  auth,
  // add here
  cards,
  transactions,
};

export default actions;
