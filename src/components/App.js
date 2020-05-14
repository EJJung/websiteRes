import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';


import { theme } from '../style/designScheme';
import Header from './Header';
import Banner from './Banner';
import Roles from './Roles';
import Features from './Features';
import Projects from './Projects';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <Banner />
        <Roles />
        <Features />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;