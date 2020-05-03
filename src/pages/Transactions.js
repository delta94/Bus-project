import RestList from 'components/Rest/RestList';
import TransactionsTable from 'containers/Transactions/Table';
import React from 'react';

const Transactions = () => {
  return <RestList resource="transactions" table={TransactionsTable} />;
};

Transactions.propTypes = {};

export default Transactions;
