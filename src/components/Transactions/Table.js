/* eslint-disable react/jsx-wrap-multilines */
import RestTable from 'components/Rest/RestTable';
import React from 'react';
import { formatDate, formatNumberToMoney } from 'utils/textUtils';

const Table = () => {
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Ngày giao dịch',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (row) => <span>{formatDate(row, 'DD/MM/YYYY hh:mm:ss')}</span>,
    },
    {
      title: 'Số tiền',
      dataIndex: 'amount',
      key: 'amount',
      render: (row) => <span>{formatNumberToMoney(row)}</span>,
    },
    {
      title: 'Số thẻ',
      dataIndex: 'cardId',
      key: 'cardId',
      render: (row) => <span>{row}</span>,
    },
  ];
  return <RestTable columns={columns} resource="transactions" />;
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
