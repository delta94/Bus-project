/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { capitalize } from 'utils/string';

export const PRIMARY_KEY = 'id';

const crudSlice = ({ name, initialState = {}, reducers = {} }) => {
  const { actions, reducer } = createSlice({
    name: capitalize(name),
    initialState: {
      allData: [],
      data: {},
      messageError: null,
      totalPage: 0,
      totalItems: 0,
      offset: 0,
      limit: null,
      page: null,
      loading: false,
      ...initialState,
    },
    reducers: {
      // actions
      getAllData: () => {},
      getDataById: () => {},
      deleteDataById: {
        reducer: () => {},
        prepare: (data) => ({
          payload: {
            ...data,
          },
          meta: { async: true },
        }),
      },
      createData: {
        reducer: () => {},
        prepare: (data) => ({
          payload: {
            ...data,
          },
          meta: { async: true },
        }),
      },
      editData: {
        reducer: () => {},
        prepare: (data) => ({
          payload: {
            ...data,
          },
          meta: { async: true },
        }),
      },
      customData: {
        reducer: () => {},
        prepare: (data) => ({
          payload: {
            ...data,
          },
          meta: { async: true },
        }),
      },
      // reducers
      setLoading: (state, { payload }) => {
        state.loading = payload;
      },
      getMessageError: (state, { payload }) => {
        state.messageError = payload;
      },
      getAllDataSuccess: (state, { payload }) => {
        state.allData = payload.items?.map((item, index) => {
          return {
            ...item,
            key: (payload.currentPage - 1) * payload.limit + index + 1,
          };
        });
        state.totalPage = payload.totalPage;
        state.totalItems = payload.totalItems;
        state.limit = payload.limit;
        state.page = payload.currentPage;
        state.loading = false;
      },
      getDataByIdSuccess: (state, { payload }) => {
        state.data = {
          ...state.data,
          ...payload,
        };
      },
      deleteDataSuccess: (state, { payload }) => {
        state.allData.filter(
          (data) => data[PRIMARY_KEY] !== payload[PRIMARY_KEY],
        );
      },
      editDataSuccess: (state, { payload }) => {
        state.allData = state.allData.map((data) => {
          if (data[PRIMARY_KEY] === payload[PRIMARY_KEY]) {
            return { ...data, ...payload, key: data.key };
          }
          return data;
        });
        state.data = { ...payload, key: state.data.key };
      },
      createDataSuccess: (state, { payload }) => {
        state.allData.forEach((e) => {
          e.key += 1;
        });
        state.allData = [
          {
            ...payload,
            key: 1,
          },
          ...state.allData,
        ];
        state.totalItems += 1;
      },
      ...reducers,
    },
  });

  return { actions, reducer };
};
export default crudSlice;
