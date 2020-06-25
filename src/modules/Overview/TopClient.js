import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Table } from 'antd';
import { formatNumber } from 'utils/textUtils';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../actions';

const TopClient = () => {
  const { items: cards, loading } = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      actions.cards.getAll({
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
      dataSource={cards}
      loading={loading === 'getAll'}
    />
  );
};

TopClient.propTypes = {};

export default TopClient;
