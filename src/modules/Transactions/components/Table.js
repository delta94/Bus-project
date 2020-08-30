/* eslint-disable react/jsx-wrap-multilines */
import RestTable from '@/modules/common/RestTable';
import React from 'react';
import { formatDate, formatNumberToMoney } from '@/utils/textUtils';
import { Link } from 'react-router-dom';

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
      sorter: true,
    },
    {
      title: 'Số tiền',
      dataIndex: 'amount',
      key: 'amount',
      render: (row) => <span>{formatNumberToMoney(row)}</span>,
      sorter: true,
    },
    {
      title: 'Khách hàng',
      dataIndex: 'user',
      key: 'user',
      render: (row) => <Link to={`users/${row.id}`}>{row.username}</Link>,
    },
    {
      title: 'Chuyến',
      dataIndex: ['trip', 'title'],
      key: 'trip',
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="transactions"
      action={{ hasCreateButton: false }}
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
