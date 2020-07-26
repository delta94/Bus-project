import React from 'react';
import RestList from 'components/Rest/RestList';
import DriversTable from './components/Table';

const Drivers = () => {
  return <RestList resource="drivers" table={DriversTable} />;
};

Drivers.propTypes = {};

export default Drivers;
