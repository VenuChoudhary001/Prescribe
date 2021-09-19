import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import Landing from "../Pages/LandingPage";
import Prescription from "../Pages/Dashboard/Prescription";
const ROUTES = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/prescription">
           <Prescription/>
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default ROUTES;
