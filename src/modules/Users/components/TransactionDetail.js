/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, Typography } from 'antd';
import { formatDate, formatNumberToMoney } from 'utils/textUtils';

const TransactionDetail = ({ transactions, loading }) => {
  const columns = [
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
      title: 'Số thẻ',
      dataIndex: 'id',
      key: 'id',
      render: (row) => (
        <Typography.Paragraph copyable>{row}</Typography.Paragraph>
      ),
    },
  ];
  return (
    <Card title="Lịch sử giao dịch">
      <Table
        pagination={false}
        columns={columns}
        dataSource={transactions}
        loading={loading}
      />
    </Card>
  );
};

TransactionDetail.propTypes = {};

export default TransactionDetail;
