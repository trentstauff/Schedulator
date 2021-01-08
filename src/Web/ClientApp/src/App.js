import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/HomePage/HomePage";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";
import CalendarPage from "./components/pages/CalendarPage";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <AuthorizeRoute exact path="/calendar" component={CalendarPage} />
        <Route
          path={ApplicationPaths.ApiAuthorizationPrefix}
          component={ApiAuthorizationRoutes}
        />
      </Layout>
    );
  }
}
