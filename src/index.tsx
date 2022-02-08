import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyledComponent } from 'styles/globalStyles';
import { theme } from 'styles/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyledComponent />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
