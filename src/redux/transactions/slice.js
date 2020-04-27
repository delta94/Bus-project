import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'transactions';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
});

export default reducer;
