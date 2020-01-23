import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import SecondBrainPage from "views/SecondBrainPage/SecondBrainPage.js";
import UpliftPage from "views/UpliftPage/UpliftPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={Components} />
      <Route path="/second-brain-page" component={SecondBrainPage} />
      <Route path="/uplift-page" component={UpliftPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
