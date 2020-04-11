import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'company/audits';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
  reducers: {
    getType: () => {},
    getTypeSuccess: (state, { payload }) => {
      state.data.type = payload;
    },
  },
});

export default reducer;
