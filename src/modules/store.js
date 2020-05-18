/* eslint-disable import/no-cycle */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reduxBatch } from '@manaflair/redux-batch';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import logger from 'redux-logger';
import deferredMiddleware from 'middlewares/ExposedPromiseMiddleware';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = [
  ...getDefaultMiddleware(),
  deferredMiddleware,
  routerMiddleware(history),
];

// process.env.NODE_ENV !== 'production' && middleware.push(logger);

const store = configureStore({
  reducer: rootReducer(history),
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
