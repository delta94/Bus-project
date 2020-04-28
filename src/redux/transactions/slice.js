import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'transactions';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
  initialState: {
    analytic: {},
  },
  reducers: {
    getAnalytic: () => {},
    getAnalyticSuccess: (state, { payload }) => {
      state.analytic = payload;
    },
  },
});

export default reducer;
