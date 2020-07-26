/* eslint-disable react/jsx-wrap-multilines */
import RestTable from 'components/Rest/RestTable';
import React from 'react';
import { Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { formatNumberToMoney } from '../../../utils/textUtils';

const Table = () => {
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Avatar',
      dataIndex: ['user', 'avatar'],
      key: 'avatar',
      render: (row) => <Avatar size={50} src={row} />,
    },
    {
      title: 'Giới tính',
      dataIndex: ['user', 'gender'],
      key: 'user.gender',
    },
    {
      title: 'Tên',
      dataIndex: ['user', 'username'],
      key: 'username',
      render: (row, data) => <Link to={`users/${data.id}`}>{row}</Link>,
    },
    {
      title: 'Email',
      dataIndex: ['user', 'email'],
      key: 'email',
    },
    {
      title: 'Số diện thoại',
      dataIndex: ['user', 'phoneNumber'],
      key: 'phoneNumber',
      render: (row) => (
        <Typography.Paragraph copyable>{row}</Typography.Paragraph>
      ),
    },
    {
      title: 'Lương',
      dataIndex: 'salary',
      key: 'salary',
      render: (row) => <span>{formatNumberToMoney(row)}</span>,
      sorter: true,
    },
  ];
  return <RestTable columns={columns} resource="drivers" />;
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
