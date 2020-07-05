/* eslint-disable import/no-cycle */
import crudSlice from 'shared/crudSlice';
import transactionApi from 'api/transactions';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAnalytic = createAsyncThunk(
  'transactions/getAnalytic',
  async (payload, thunkAPI) => {
    try {
      const response = await transactionApi.getAnalytic(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

export const getPredict = createAsyncThunk(
  'transactions/getPredict',
  async (payload, thunkAPI) => {
    try {
      const response = await transactionApi.getPredict();
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
    predict: [],
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
    [getPredict.pending]: (state) => {
      state.loading = 'predict';
    },
    [getPredict.fulfilled]: (state, { payload }) => {
      state.predict = payload;
      state.loading = null;
    },
    [getPredict.rejected]: (state) => {
      state.loading = null;
    },
  },
});

export default reducer;
