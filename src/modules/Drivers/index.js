import React from 'react';
import RestList from '@/modules/common/RestList';
import DriversTable from './components/Table';

const Drivers = () => {
  return <RestList resource="drivers" table={DriversTable} />;
};

Drivers.propTypes = {};

export default Drivers;
