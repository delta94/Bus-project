import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useGetUserInfo from 'hooks/useGetUserInfo';
import PrivateLayout from './PrivateLayout';

const Layout = ({ children }) => {
  useGetUserInfo();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <PrivateLayout>{children}</PrivateLayout>;
  }
  return <>{children}</>;
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
