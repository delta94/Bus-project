import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'branches';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
});

export default reducer;
