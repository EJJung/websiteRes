import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './components/App';
import { theme } from './style/designScheme';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <App />
//   </ThemeProvider>, 
// document.querySelector('#root'));