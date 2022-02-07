import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyledComponent } from 'styles/globalStyles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyledComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
