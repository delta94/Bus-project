/* eslint-disable max-lines */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { capitalize } from 'utils/string';
import request from 'api/request';
import { replace } from 'connected-react-router';
import { notification } from 'antd';
import i18next from 'i18next';
import { showError } from 'utils/exception';

export const PRIMARY_KEY = 'id';

const crudSlice = ({
  name,
  initialState = {},
  reducers = {},
  extraReducers = {},
}) => {
  // THUNK
  const getAll = createAsyncThunk(
    `${capitalize(name)}/getAll`,
    async (payload, thunkAPI) => {
      try {
        const response = await request({
          ...payload,
          url: payload?.url || name,
        });
        if (response.data) {
          return {
            ...response.data,
            limit: payload.params.limit,
          };
        }
        throw response;
      } catch (error) {
        showError(error?.data);
        return thunkAPI.rejectWithValue();
      }
    },
  );

  const getById = createAsyncThunk(
    `${capitalize(name)}/getById`,
    async (payload, thunkAPI) => {
      try {
        const response = await request({
          ...payload,
          url: payload?.url || name,
        });
        if (response.data) {
          return response.data;
        }
        throw response;
      } catch (error) {
        showError(error?.data);
        return thunkAPI.rejectWithValue();
      }
    },
  );

  const create = createAsyncThunk(
    `${capitalize(name)}/create`,
    async (payload, thunkAPI) => {
      try {
        const { location } = thunkAPI.getState().router;
        const response = await request({
          ...payload,
          url: payload?.url || name,
          method: 'POST',
        });
        if (response.data) {
          thunkAPI.dispatch(replace(`${location.pathname}${location.search}`));
          notification.success({
            message: i18next.t('createSuccess'),
          });
          return response.data;
        }
        throw response;
      } catch (error) {
        showError(error?.data);
        return thunkAPI.rejectWithValue();
      }
    },
  );

  const update = createAsyncThunk(
    `${capitalize(name)}/update`,
    async (payload, thunkAPI) => {
      try {
        const { location } = thunkAPI.getState().router;
        const response = await request({
          ...payload,
          url: payload?.url || name,
          method: payload.method || 'PUT',
        });
        if (response.data) {
          thunkAPI.dispatch(replace(`${location.pathname}${location.search}`));
          notification.success({
            message: i18next.t('editSuccess'),
          });
          return response.data;
        }
        throw response;
      } catch (error) {
        showError(error?.data);
        return thunkAPI.rejectWithValue();
      }
    },
  );

  // SLICE
  const { actions, reducer } = createSlice({
    name: capitalize(name),
    initialState: {
      items: [],
      item: {},
      messageError: null,
      totalPage: 0,
      totalItems: 0,
      offset: 0,
      limit: null,
      page: null,
      loading: false,
      ...initialState,
    },
    reducers,
    extraReducers: {
      [getAll.pending]: (state) => {
        state.loading = 'getAll';
      },
      [getAll.fulfilled]: (state, { payload }) => {
        state.items = payload.data?.map((item, index) => {
          return {
            ...item,
            key: (payload.page - 1) * payload.limit + index + 1,
          };
        });
        state.totalPage = payload.pageCount;
        state.totalItems = payload.total;
        state.limit = payload.limit;
        state.page = payload.page;
        state.loading = null;
      },
      [getAll.rejected]: (state) => {
        state.loading = null;
      },
      [getById.pending]: (state) => {
        state.loading = 'getById';
      },
      [getById.fulfilled]: (state, { payload }) => {
        state.item = payload;
      },
      [getById.rejected]: (state) => {
        state.loading = null;
      },
      [create.pending]: (state) => {
        state.loading = 'create';
      },
      [create.fulfilled]: (state, { payload }) => {
        state.items.forEach((e) => {
          e.key += 1;
        });
        state.items = [
          {
            ...payload,
            key: 1,
          },
          ...state.items,
        ];
        state.totalItems += 1;
        state.loading = null;
      },
      [create.rejected]: (state) => {
        state.loading = null;
      },
      [update.pending]: (state) => {
        state.loading = 'update';
      },
      [update.fulfilled]: (state, { payload }) => {
        state.items = state.items.map((item) => {
          if (item[PRIMARY_KEY] === payload[PRIMARY_KEY]) {
            return { ...item, ...payload, key: item.key };
          }
          return item;
        });
        state.item = { ...payload, key: state.item.key };
      },
      [update.rejected]: (state) => {
        state.loading = null;
      },
      ...extraReducers,
    },
  });

  return {
    actions: {
      ...actions,
      getAll,
      getById,
      create,
      update,
    },
    reducer,
  };
};
export default crudSlice;
