import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import PrivateRoute from 'shared/PrivateRoute';
import CreateCard from 'modules/Cards/components/Create';
import Topup from 'modules/Cards/components/Topup';
import loadable from '../utils/loadable';
import ModalRoute from '../shared/ModalRoute';

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
        {/* ------------------------------Route Add on------------------------ */}
        <PrivateRoute
          path="/"
          component={loadable(import('./Overview'))}
          exact
        />
        <PrivateRoute
          path="/cards"
          component={loadable(import('./Cards'))}
          exact
        />
        <PrivateRoute
          path="/cards/:id"
          component={loadable(import('./Cards/[id]'))}
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
      <ModalRoute path="#cards/create" component={CreateCard} title="Tạo thẻ" />
      <ModalRoute path="#cards/topup" component={Topup} title="Nộp tiền" />
    </Layout>
  );
};

export default Routes;
