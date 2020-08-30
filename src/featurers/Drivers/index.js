import React from 'react';
import RestList from '@/features/common/RestList';
import DriversTable from './components/Table';

const Drivers = () => {
  return <RestList resource="drivers" table={DriversTable} />;
};

Drivers.propTypes = {};

export default Drivers;
