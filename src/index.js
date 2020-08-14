import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider, Empty } from 'antd';
import GlobalStyle from 'appStyle';
import actions from 'modules/actions';
import setupAxiosInterceptors from 'api/setupAxiosInterceptors';
import request from 'api/request';
import { refreshToken } from 'modules/Auth/slice';
import store, { history } from './modules/store';
import Routes from './modules';
import './configs/language';
import * as serviceWorker from './serviceWorker';
import useTheme from './hooks/useTheme';

setupAxiosInterceptors({
  request,
  store,
  logoutAction: actions.auth.logout,
  refreshTokenAction: refreshToken,
});

const App = () => {
  const theme = useTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ConnectedRouter history={history}>
          <ConfigProvider renderEmpty={() => <Empty />}>
            <Routes />
          </ConfigProvider>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
