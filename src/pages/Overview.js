import React from 'react';
import RestList from 'components/Rest/RestList';
import CardTable from 'containers/Overview/Table';

const Overview = () => {
  return <RestList resource="cards" table={CardTable} />;
};

Overview.propTypes = {};

export default Overview;
