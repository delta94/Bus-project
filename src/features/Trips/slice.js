/* eslint-disable import/no-cycle */
import crudSlice from 'shared/crudSlice';

export const { actions, reducer } = crudSlice({
  name: 'trips',
});

export default reducer;
