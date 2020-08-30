/* eslint-disable import/no-cycle */
import crudSlice from '@/shared/crudSlice';

export const { actions, reducer } = crudSlice({
  name: 'drivers',
});

export default reducer;
