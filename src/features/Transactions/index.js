import RestList from '@/features/common/RestList';
import TransactionsTable from '@/features/Transactions/components/Table';
import React from 'react';

const Transactions = () => {
  return <RestList resource="transactions" table={TransactionsTable} />;
};

Transactions.propTypes = {};

export default Transactions;
