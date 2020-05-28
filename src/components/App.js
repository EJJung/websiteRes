import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { theme } from '../style/designScheme';
import history from './history';
import Header from './utils/Header';
import MainpageSum from './mainpage/mainpageSum';
import { AboutSum } from './About/AboutSum';
import { WorkSum } from './Works/WorkSum';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/' component={MainpageSum}/>
          <Route path='/works' component={WorkSum} />
          <Route path='/about' component={AboutSum} />
        </Switch>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;