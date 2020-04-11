/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { formatOrdinalnumber } from 'utils/number';

const WorkingHourTable = ({ data }) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
      render: (row, data, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Mở cửa',
      dataIndex: 'openHour',
      key: 'openHour',
      render: (row, data) => (
        <span>
          {formatOrdinalnumber(data.openHour)}:
          {formatOrdinalnumber(data.openMinute)}
        </span>
      ),
    },
    {
      title: 'Đóng cửa',
      dataIndex: 'closeHour',
      key: 'closeHour',
      render: (row, data) => (
        <span>
          {formatOrdinalnumber(data.closeHour)}:
          {formatOrdinalnumber(data.closeMinute)}
        </span>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

WorkingHourTable.propTypes = {
  data: PropTypes.array,
};

export default WorkingHourTable;
