import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'topup';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
  initialState: {
    isLoadingChangeStatus: false,
  },
  reducers: {
    changeStatus: {
      reducer: () => {},
      prepare: (data) => ({
        payload: {
          ...data,
        },
        meta: { async: true },
      }),
    },
    changeLoadingStatus: (state, { payload }) => {
      state.isLoadingChangeStatus = payload;
    },
  },
});

export default reducer;
