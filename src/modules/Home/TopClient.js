import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Table } from 'antd';
import { formatNumber } from '@/utils/textUtils';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

const TopClient = () => {
  const { items: users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actions.users.getAll({
        params: {
          limit: 5,
          sort: 'totalTransaction,DESC',
        },
      }),
    );
  }, [dispatch]);
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
      render: (row) => <Avatar size={50} src={row} />,
    },
    {
      title: 'Tên',
      dataIndex: 'username',
      key: 'username',
      render: (row, data) => <Link to={`users/${data.id}`}>{row}</Link>,
    },
    {
      title: 'Tổng số lần đi',
      dataIndex: 'totalTransaction',
      key: 'totalTransaction',
      render: (row) => <span>{formatNumber(row)}</span>,
    },
  ];
  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={users}
      loading={loading === 'getAll'}
    />
  );
};

TopClient.propTypes = {};

export default TopClient;
