/* eslint-disable import/no-cycle */
import crudSlice from 'shared/crudSlice';
import { getAnalyticApi } from 'api/transactions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAnalytic = createAsyncThunk(
  'transactions/getAnalytic',
  async (payload, thunkAPI) => {
    try {
      const response = await getAnalyticApi(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const { actions, reducer } = crudSlice({
  name: 'transactions',
  initialState: {
    analytic: {},
    loading: null,
  },
  extraReducers: {
    [getAnalytic.pending]: (state) => {
      state.loading = 'analytic';
    },
    [getAnalytic.fulfilled]: (state, { payload }) => {
      state.analytic = payload;
      state.loading = null;
    },
    [getAnalytic.rejected]: (state) => {
      state.loading = null;
    },
  },
});

export default reducer;
