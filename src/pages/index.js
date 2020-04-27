import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'components/common/Layout';
import PrivateRoute from 'pages/utils/PrivateRoute';
import CreateCard from 'components/Overview/Create';
import Topup from 'components/Overview/Topup';
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
