import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import About from "./About";
import Plan from "./Plan";
import Profile from "./Profile";
import Result from "./Result";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/about" component={About} />
      <Route exact path="/plan" component={Plan} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/result" component={Result} />
    </Switch>
  </BrowserRouter>
);
