import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider, Empty } from 'antd';
import GlobalStyle from 'appStyle';
import store, { history } from './modules/store';
import Routes from './modules';
import './configs/language';
import * as serviceWorker from './serviceWorker';
import useTheme from './hooks/useTheme';

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
