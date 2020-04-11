import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    name: '',
  },
  isAuth: !!localStorage.getItem('sessionToken'),
  messageError: null,
};

export const { actions, reducer } = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    login: () => {},
    getInfo: () => {},
    loginSuccess: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem('sessionToken');
    },
    getMessageError: (state, { payload }) => {
      state.messageError = payload;
    },
    getInfoSuccess: (state, { payload }) => {
      state.data = payload.user;
    },
  },
});

export default reducer;
