import React from 'react';
import RestList from 'modules/common/RestList';
import UserTable from 'modules/Users/components/Table';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import { ROLES } from '../../configs/constants';
import UserInfo from '../Auth/Info';

const Overview = () => {
  const { data: userInfo, loading } = useSelector((state) => state.auth);
  if (loading === 'getInfo') {
    return <Skeleton />;
  }
  return userInfo.role === ROLES.ADMIN ? (
    <RestList resource="users" table={UserTable} />
  ) : (
    <UserInfo />
  );
};

Overview.propTypes = {};

export default Overview;
