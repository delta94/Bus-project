/* eslint-disable import/no-cycle */
import crudSlice from 'shared/crudSlice';
import transactionApi from 'api/transactions';
import {
  createAsyncThunk,
  createSlice,
  combineReducers,
} from '@reduxjs/toolkit';

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

const transactions = crudSlice({
  name: 'transactions',
});

const analytic = createSlice({
  name: 'analytic',
  initialState: {
    totalTransaction: 0,
    totalAmount: 0,
    totalCustomer: 0,
    chart: [],
    isFetching: false,
  },
  extraReducers: {
    [getAnalytic.pending]: (state) => {
      state.isFetching = true;
    },
    [getAnalytic.fulfilled]: (state, { payload }) => {
      state.totalTransaction = payload.totalTransaction;
      state.totalAmount = payload.totalAmount;
      state.totalCustomer = payload.totalCustomer;
      state.chart = payload.chart;
      state.isFetching = false;
    },
    [getAnalytic.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

const predict = createSlice({
  name: 'predict',
  initialState: {
    items: [],
    isFetching: false,
  },
  extraReducers: {
    [getPredict.pending]: (state) => {
      state.loading = 'predict';
    },
    [getPredict.fulfilled]: (state, { payload }) => {
      state.predict = payload;
      state.isFetching = false;
    },
    [getPredict.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export const actions = {
  ...transactions.actions,
  ...transactions.actions,
  ...predict.actions,
};

export default combineReducers({
  transactions: transactions.reducer,
  analytic: analytic.reducer,
  predict: predict.reducer,
});
