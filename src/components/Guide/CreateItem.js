import { Col, Row } from 'antd';
import React from 'react';
import CreateExisItem from './CreateExisItem';
import CreateNewItem from './CreateNewItem';

const Create = () => {
  return (
    <Row gutter={30}>
      <Col span={12}>
        <CreateNewItem />
      </Col>
      <Col span={12} className="relative">
        <CreateExisItem />
      </Col>
    </Row>
  );
};

export default Create;
