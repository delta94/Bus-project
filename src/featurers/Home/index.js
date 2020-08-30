import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { ROLES } from '../../configs/constants';
import Dashboard from './Dashboard';
import Overview from './Overview';

const Home = () => {
  const { data: userInfo, loading } = useSelector((state) => state.auth);
  if (loading === 'getInfo') {
    return <Skeleton />;
  }
  return userInfo.role === ROLES.USER ? <Dashboard /> : <Overview />;
};

Home.propTypes = {};

export default Home;
