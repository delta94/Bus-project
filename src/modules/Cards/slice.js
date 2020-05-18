/* eslint-disable import/no-cycle */
import crudSlice from 'shared/crudSlice';

export const { actions, reducer } = crudSlice({
  name: 'cards',
});

export default reducer;
