import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import Landing from "../Pages/LandingPage";
const ROUTES = () => {
  return (
    <>
      <Router>
     
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default ROUTES;
