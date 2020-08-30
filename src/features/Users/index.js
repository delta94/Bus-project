import React from 'react';
import RestList from '@/features/common/RestList';
import UserTable from '@/features/Users/components/Table';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { ROLES } from '../../configs/constants';
import UserInfo from '../Auth/Info';

const Overview = () => {
  const { data: userInfo, loading } = useSelector((state) => state.auth);
  if (loading === 'getInfo') {
    return <Skeleton />;
  }
  return userInfo.role === ROLES.USER ? (
    <RestList resource="users" table={UserTable} />
  ) : (
    <UserInfo />
  );
};

Overview.propTypes = {};

export default Overview;
