/* eslint-disable import/no-cycle */
import crudSlice from 'redux/utils/crudSlice';

export const { actions, reducer } = crudSlice({
  name: 'cards',
});

export default reducer;
