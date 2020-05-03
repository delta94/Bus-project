import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import PrivateRoute from 'pages/utils/PrivateRoute';
import CreateCard from 'containers/Overview/Create';
import Topup from 'containers/Overview/Topup';
import loadable from './utils/loadable';
import ModalRoute from './utils/ModalRoute';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={loadable(import('./Login'))} exact />
        {/* ------------------------------Route Add on------------------------ */}
        <PrivateRoute
          path="/"
          component={loadable(import('./Overview'), {
            fallback: null,
          })}
          exact
        />
        <PrivateRoute
          path="/transactions"
          component={loadable(import('./Transactions'), {
            fallback: null,
          })}
          exact
        />
        <PrivateRoute
          path="/analytic"
          component={loadable(import('./Analytic'), {
            fallback: null,
          })}
          exact
        />
        {/* ------------------------------Route Add on------------------------ */}
        <Route
          path="*"
          component={loadable(import('./404Page'), {
            fallback: null,
          })}
        />
      </Switch>
      {/* ------------------------------Model Add on------------------------ */}
      <ModalRoute path="#cards/create" component={CreateCard} title="Tạo thẻ" />
      <ModalRoute path="#cards/topup" component={Topup} title="Nộp tiền" />
    </Layout>
  );
};

export default Routes;
