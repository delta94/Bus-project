/* eslint-disable react/jsx-wrap-multilines */
import RestTable from 'components/Rest/RestTable';
import React from 'react';
import { formatNumberToMoney, formatNumber } from 'utils/textUtils';
import { Button } from 'antd';
import useRouter from 'hooks/useRouter';

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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số diện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },

    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số tiền còn lại',
      dataIndex: 'amount',
      key: 'amount',
      render: (row) => <span>{formatNumberToMoney(row)}</span>,
    },
    {
      title: 'Tổng số lần đi',
      dataIndex: 'totalTransaction',
      key: 'totalTransaction',
      render: (row) => <span>{formatNumber(row)}</span>,
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="cards"
      extra={
        <Button onClick={onTopup} style={{ marginRight: 10 }}>
          Nạp tiền
        </Button>
      }
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
