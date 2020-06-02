import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider, Empty } from 'antd';
import GlobalStyle from 'appStyle';
import store, { history } from './modules/store';
import theme from './configs/theme/adminTheme';
import Routes from './modules';
import './configs/language';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <ConfigProvider renderEmpty={() => <Empty />}>
          <Routes />
        </ConfigProvider>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
