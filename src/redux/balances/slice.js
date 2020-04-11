import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'company/balances';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
});

export default reducer;
