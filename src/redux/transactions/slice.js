import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'transactions';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
  initialState: {
    analytic: {},
    loading: null,
  },
  reducers: {
    getAnalytic: (state) => {
      state.loading = 'analytic';
    },
    getAnalyticSuccess: (state, { payload }) => {
      state.analytic = payload;
      state.loading = null;
    },
    getAnalyticFailure: (state) => {
      state.loading = null;
    },
  },
});

export default reducer;
