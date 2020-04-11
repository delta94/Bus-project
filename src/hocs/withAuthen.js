/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import useRouter from 'hooks/useRouter';

const withAuthen = (Component) => (props) => {
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
  return <Component {...props} />;
};

export default withAuthen;
