import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from 'shared/PrivateRoute';
import CreateUser from '@/modules/Users/components/Create';
import Topup from '@/modules/Users/components/Topup';
import CreateTrip from '@/modules/Trips/components/Create';
import ModalRoute from 'shared/ModalRoute';
import Layout from '@/modules/common/Layout';
import loadable from '@/utils/loadable';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/login"
          component={loadable(import('./Auth/Login'))}
          exact
        />
        <Route
          path="/signup"
          component={loadable(import('./Auth/SignUp'))}
          exact
        />
        <Route
          path="/forgot-password"
          component={loadable(import('./Auth/ForgotPassword'))}
          exact
        />
        <Route
          path="/change-password"
          component={loadable(import('./Auth/ResetPassword'))}
          exact
        />
        <PrivateRoute
          path="/info"
          component={loadable(import('./Auth/Info'))}
          exact
        />
        {/* ------------------------------Route Add on------------------------ */}
        <PrivateRoute path="/" component={loadable(import('./Home'))} exact />
        <PrivateRoute
          path="/users"
          component={loadable(import('./Users'))}
          exact
        />
        <PrivateRoute
          path="/drivers"
          component={loadable(import('./Drivers'))}
          exact
        />
        <PrivateRoute
          path="/users/:id"
          component={loadable(import('./Users/[id]'))}
          exact
        />
        <PrivateRoute
          path="/transactions"
          component={loadable(import('./Transactions'))}
          exact
        />
        <PrivateRoute
          path="/analytic"
          component={loadable(import('./Analytic'))}
          exact
        />
        <PrivateRoute
          path="/trips"
          component={loadable(import('./Trips'))}
          exact
        />
        <PrivateRoute
          path="/calendar"
          component={loadable(import('./Calendar'))}
          exact
        />
        <PrivateRoute
          path="/todo"
          component={loadable(import('./Todo'))}
          exact
        />
        <Route path="*" component={loadable(import('./404Page'))} />
      </Switch>
      {/* ------------------------------Model Add on------------------------ */}
      <ModalRoute
        path="#trips/create"
        component={CreateTrip}
        title="Tạo chuyến"
      />
      <ModalRoute path="#users/create" component={CreateUser} title="Tạo thẻ" />
      <ModalRoute path="#users/topup" component={Topup} title="Nộp tiền" />
    </Layout>
  );
};

export default Routes;
