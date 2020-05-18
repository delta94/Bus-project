import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useRouter from 'hooks/useRouter';

const PrivateRoute = ({ component, path, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { location } = useRouter();
  if (!isAuth) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          // eslint-disable-next-line
          state: { from: location },
        }}
      />
    );
  }
  return <Route path={path} component={component} {...rest} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.any,
};

export default PrivateRoute;
