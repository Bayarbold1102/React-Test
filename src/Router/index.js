import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "Layout/AuthLayout";
import AdminLayout from "Layout/AdminLayout";

import { SignUp } from "./Routes";
import {Admin} from "./Routes"
import {SuperAdminR} from "./Routes";
import {AdminR} from "./Routes"
import {CustomerR} from './Routes'

function Index() {
  return (
    <Switch>
      <AppRoute exact path="/" layout={AuthLayout} component={SignUp} />
      <AppRoute path="/admin" layout={AdminLayout}  component={Admin}/>
      <AppRoute path="/user/superadmin" layout={AdminLayout} component={SuperAdminR}/>
      <AppRoute path="/user/admin" layout={AdminLayout} component={AdminR}/>
      <AppRoute path="/user/customer" layout={AdminLayout} component={CustomerR}/>
    </Switch>
  );
}

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Suspense fallback={" "}>
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  </Suspense>
);
export default Index;
