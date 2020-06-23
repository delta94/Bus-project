import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const FieldItem = ({ name, value, extraValue, gutter = 10 }) => {
  return (
    <Row
      gutter={gutter}
      style={{ marginTop: '20px' }}
      align="middle"
      justify="center"
    >
      <Col span={7} className="flex">
        {name}
        {' :'}
      </Col>
      <Col span={17} className="flex">
        {value}
        <span style={{ marginLeft: '10px' }}>{extraValue}</span>
      </Col>
    </Row>
  );
};

FieldItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  gutter: PropTypes.number,
  extraValue: PropTypes.any,
};

export default FieldItem;
