import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

const LabelActive = ({ status }) => {
  if (status) {
    return <Tag color="red">Đã kích hoạt</Tag>;
  }
  return <Tag color="cyan">Chưa kích hoạt</Tag>;
};

LabelActive.propTypes = {
  status: PropTypes.bool,
};

export default LabelActive;
