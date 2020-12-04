import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicOnlyRoute from "../PublicOnlyRoute/PublicOnlyRoute";
import RegistrationRoute from "../../routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../routes/LoginRoute/LoginRoute";
import LandingRoute from "../../routes/LandingRoute/LandingRoute";
import DashboardRoute from "../../routes/DashboardRoute/DashboardRoute";
import ResultsRoute from "../../routes/ResultsRoute/ResultsRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import "./App.css";
import UserProfileRoute from "../../routes/UserProfileRoute/UserProfileRoute";
import SearchedListRoute from "../../routes/SearchedListRoute/SearchedListRoute";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <PrivateRoute exact path={"/home"} component={DashboardRoute} />

            <PrivateRoute exact path={"/results"} component={ResultsRoute} />

            <PublicOnlyRoute
              exact
              path={"/register"}
              component={RegistrationRoute}
            />
            <PublicOnlyRoute exact path={"/login"} component={LoginRoute} />

            <PrivateRoute
              exact
              path={"/userProfile/:id"}
              component={UserProfileRoute}
            />
            <PrivateRoute
              exact
              path={"/SearchedList/:id"}
              component={SearchedListRoute}
            />
            <PublicOnlyRoute exact path={"/"} component={LandingRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
