import { addDecorator, configure } from '@storybook/react';

import * as React from 'react';
import GlobalStyle from '../src/appStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../src/configs/theme/adminTheme';
import { Provider } from 'react-redux';

const req = require.context('../../', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const withGlobal = (cb) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {cb()}
  </ThemeProvider>
);

addDecorator(withGlobal);
configure(loadStories, module);
