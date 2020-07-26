import React from 'react';
import RestList from 'components/Rest/RestList';
import UserTable from 'modules/Users/components/Table';

const Overview = () => {
  return <RestList resource="users" table={UserTable} />;
};

Overview.propTypes = {};

export default Overview;
