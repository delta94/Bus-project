import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const Status = ({ active }) => (
  <Tag color={active ? '#2db7f5' : '#ff5500'}>
    {active ? 'Hoạt động' : 'Không hoạt động'}
  </Tag>
);

Status.propTypes = {
  active: PropTypes.bool,
};

export default Status;
