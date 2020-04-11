import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'components/common/Layout';
import PrivateRoute from 'pages/utils/PrivateRoute';
import loadable from './utils/loadable';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={loadable(import('./Login'))} exact />
        {/* ------------------------------Route Add on------------------------ */}
        <PrivateRoute
          path="/"
          component={() => <Redirect to="/companies" />}
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
    </Layout>
  );
};

export default Routes;
