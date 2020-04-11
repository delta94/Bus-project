import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reduxBatch } from '@manaflair/redux-batch';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import logger from 'redux-logger';
import deferredMiddleware from './utils/ExposedPromiseMiddleware';
import rootReducer from './reducers';
// eslint-disable-next-line import/no-cycle
import rootSagas from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(),
  deferredMiddleware,
  sagaMiddleware,
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

sagaMiddleware.run(rootSagas);

export default store;
