/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';
import { capitalize } from 'utils/string';

export const PRIMARY_KEY = 'id';

const crudSlice = ({ name, initialState = {}, reducers = {} }) => {
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
    reducers: {
      // actions
      getAll: () => {},
      getById: () => {},
      getData: () => {},
      update: {
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
      getDataSuccess: (state, { payload }) => {
        state.data = {
          ...state.data,
          ...payload,
        };
      },
      getMessageError: (state, { payload }) => {
        state.messageError = payload;
      },
      getAllDataSuccess: (state, { payload }) => {
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
        state.loading = false;
      },
      getByIdSuccess: (state, { payload }) => {
        state.item = payload;
      },
      deleteByIdSuccess: (state, { payload }) => {
        state.items.filter(
          (item) => item[PRIMARY_KEY] !== payload[PRIMARY_KEY],
        );
      },
      editSuccess: (state, { payload }) => {
        state.items = state.items.map((item) => {
          if (item[PRIMARY_KEY] === payload[PRIMARY_KEY]) {
            return { ...item, ...payload, key: item.key };
          }
          return item;
        });
        state.item = { ...payload, key: state.item.key };
      },
      createSuccess: (state, { payload }) => {
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
      },
      ...reducers,
    },
  });

  return { actions, reducer };
};
export default crudSlice;
