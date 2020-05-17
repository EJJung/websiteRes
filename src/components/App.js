import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';


import { theme } from '../style/designScheme';
import Header from './Header';
import Banner from './Banner';
import Roles from './Roles';
import Features from './Features';
import Projects from './Projects';
import Footer from './Footer';

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
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;