/* eslint-disable react/jsx-wrap-multilines */
import RestTable from 'components/Rest/RestTable';
import React from 'react';
import { formatNumberToMoney, formatNumber } from 'utils/textUtils';
import { Button, Typography, Avatar } from 'antd';
import useRouter from 'hooks/useRouter';
import { Link } from 'react-router-dom';

const Table = () => {
  const { handlePushModal } = useRouter();
  const onTopup = () => {
    handlePushModal('cards/topup');
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 60,
      key: 'key',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (row) => (
        <Avatar size={50} src="https://i.pravatar.cc">
          {row}
        </Avatar>
      ),
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      render: (row, data) => <Link to={`cards/${data.id}`}>{row}</Link>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số diện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (row) => (
        <Typography.Paragraph copyable>{row}</Typography.Paragraph>
      ),
    },

    {
      title: 'Số tiền còn lại',
      dataIndex: 'amount',
      key: 'amount',
      render: (row) => <span>{formatNumberToMoney(row)}</span>,
      sorter: true,
    },
    {
      title: 'Tổng số lần đi',
      dataIndex: 'totalTransaction',
      key: 'totalTransaction',
      render: (row) => <span>{formatNumber(row)}</span>,
      sorter: true,
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="cards"
      action={{
        extra: <Button onClick={onTopup}>Nạp tiền</Button>,
      }}
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
