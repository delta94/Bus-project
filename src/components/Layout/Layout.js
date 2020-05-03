/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useGetUserInfo from 'hooks/useGetUserInfo';
import PrivateLayout from './PrivateLayout';

const Layout = ({ children }) => {
  useGetUserInfo();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return (
      <PrivateLayout
        logo={require('assets/images/logo.png')}
        fullLogo={require('assets/images/fullLogo.png')}
      >
        {children}
      </PrivateLayout>
    );
  }
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
