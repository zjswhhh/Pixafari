import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import About from "./About";
import Plan from "./Plan";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/about" component={About} />
      <Route exact path="/plan" component={Plan} />
    </Switch>
  </BrowserRouter>
);
