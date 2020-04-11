import crudSlice from 'redux/utils/crudSlice';

export const RESOURCE = 'companies';
export const { actions, reducer } = crudSlice({
  name: RESOURCE,
  reducers: {
    editLoyaltyProgram: () => {},
    editMileStonesLoyalty: () => {},
    createLoyaltyProgram: () => {},
    editLoyaltyProgramSuccess: (state, { payload }) => {
      state.data.loyaltyProgram = payload;
    },
    getSummary: () => {},
    getSummarySuccess: (state, { payload }) => {
      state.data.summary = payload;
    },
  },
});

export default reducer;
