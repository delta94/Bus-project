import { actions as auth } from '../auth/slice';
// import here
import { actions as balances } from '../balances/slice';

import { actions as staff } from '../staff/slice';

import { actions as audit } from '../audit/slice';

import { actions as topup } from '../topup/slice';

import { actions as companies } from '../companies/slice';
import { actions as transactions } from '../transactions/slice';
import { actions as branches } from '../branches/slice';
import { actions as categories } from '../categories/slice';
import { actions as guides } from '../guides/slice';

const actions = {
  auth,
  // add here
  balances,
  staff,
  audit,
  topup,
  branches,
  companies,
  transactions,
  categories,
  guides,
};

export default actions;
