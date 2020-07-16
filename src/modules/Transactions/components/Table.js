/* eslint-disable react/jsx-wrap-multilines */
import RestTable from 'components/Rest/RestTable';
import React from 'react';
import { formatDate, formatNumberToMoney } from 'utils/textUtils';
import { Typography } from 'antd';
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
      dataIndex: 'card',
      key: 'card',
      render: (row) => <Link to={`cards/${row.id}`}>{row.username}</Link>,
    },
    {
      title: 'Số thẻ',
      dataIndex: 'id',
      key: 'id',
      render: (row) => (
        <Typography.Paragraph copyable>{row}</Typography.Paragraph>
      ),
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
