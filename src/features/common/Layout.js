/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useGetUserInfo from '@/hooks/useGetUserInfo';
import Search from '@/components/Layout/Search';
import Chat from '@/components/Layout/Chat';
import Language from '@/components/Layout/Language';
import Notification from '@/components/Layout/Notification';
import PrivateLayout from '@/components/Layout/PrivateLayout';
import UserInfo from '../Auth/UserInfo';

const MENU = [
  {
    component: <Search />,
  },
  {
    component: <Notification />,
  },
  {
    component: <Language />,
  },
  {
    component: <Chat />,
  },
  {
    component: <UserInfo />,
  },
];

const Layout = ({ children }) => {
  useGetUserInfo();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return (
      <PrivateLayout
        menuList={MENU}
        logo={require('@/assets/images/logo.png')}
        fullLogo={require('@/assets/images/fullLogo.png')}
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
