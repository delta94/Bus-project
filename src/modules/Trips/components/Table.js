/* eslint-disable react/jsx-wrap-multilines */
import RestTable from 'components/Rest/RestTable';
import React from 'react';
import { formatNumberToMoney } from 'utils/textUtils';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROLES } from '../../../configs/constants';

const Table = () => {
  const { data: userInfo } = useSelector((state) => state.auth);
  const isRoleAdmin = userInfo.role === ROLES.ADMIN;

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Tên tuyến',
      dataIndex: 'title',
      key: 'title',
      render: (row, data) => <Link to={`drivers/${data.id}`}>{row}</Link>,
    },
    {
      title: 'Giá vé',
      dataIndex: 'amount',
      key: 'amount',
      render: (row) => <span>{formatNumberToMoney(row)}</span>,
      sorter: true,
    },
    {
      title: 'Tài xế',
      dataIndex: 'driver',
      key: 'driver',
      render: (row) =>
        isRoleAdmin ? (
          <Link to={`drivers/${row.id}`}>{row?.user?.username}</Link>
        ) : (
          <span>{row?.user?.username}</span>
        ),
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="trips"
      action={{
        hasCreateButton: isRoleAdmin,
        hasExportExcelButton: isRoleAdmin,
      }}
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
