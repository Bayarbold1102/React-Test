import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AuthLayout from "Layout/AuthLayout";
import AdminLayout from "Layout/AdminLayout";
import TradeLayout from "Layout/TradeLayout"

import { SignUp } from "./Routes";
import {Admin} from "./Routes"
import {SuperAdminR} from "./Routes";
import {AdminR} from "./Routes"
import {CustomerR} from './Routes'
import {List} from './Routes'
import {Option1} from "./Routes";
import {Option2} from "./Routes";
import {MainTrade} from './Routes'
import {Wallet} from './Routes'
import {Profile} from './Routes'
import {Trading} from './Routes'
function Index() {
  return (
    <Switch>
      <AppRoute exact path="/" layout={AuthLayout} component={SignUp} />
      <AppRoute path="/admin" layout={AdminLayout}  component={Admin}/>
      <AppRoute path="/user/superadmin" layout={AdminLayout} component={SuperAdminR}/>
      <AppRoute path="/user/admin" layout={AdminLayout} component={AdminR}/>
      <AppRoute path="/user/customer" layout={AdminLayout} component={CustomerR}/>
      <AppRoute path="/list" layout={AdminLayout} component={List}/>
      <AppRoute path="/option1" layout={AdminLayout} component={Option1}/>
      <AppRoute path="/option2" layout={AdminLayout} component={Option2}/>
      <AppRoute path="/main" layout={TradeLayout} component={MainTrade}/>
      <AppRoute path="/wallet" layout={TradeLayout} component={Wallet}/>
      <AppRoute path="/trading" layout={TradeLayout} component={Trading}/>
      <AppRoute path="/profile" layout={TradeLayout} component={Profile}/>
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
