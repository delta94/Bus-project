/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showError } from 'utils/exception';
import authApi from '../../api/auth';

export const login = createAsyncThunk(
  'Auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload.data);
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue(error?.data?.message);
    }
  },
);

export const getInfo = createAsyncThunk(
  'Auth/getInfo',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authApi.getInfo();
      return response.data;
    } catch (error) {
      showError(error?.data);
      return rejectWithValue();
    }
  },
);

export const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState: {
    data: {
      name: '',
    },
    isAuth: !!localStorage.getItem('sessionToken'),
    messageError: null,
    loading: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem('sessionToken');
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = 'login';
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem('sessionToken', payload.token);
      state.isAuth = true;
      state.loading = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = null;
      state.messageError = payload;
    },
    [getInfo.pending]: (state) => {
      state.loading = 'getInfo';
    },
    [getInfo.fulfilled]: (state, { payload }) => {
      state.data.name = payload.data.username;
      state.loading = null;
    },
    [getInfo.rejected]: (state) => {
      state.loading = null;
    },
  },
});

export default reducer;
