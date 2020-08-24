import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import Text from './Text';

export const StyledLoading = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 6px solid transparent;
    border-top-color: #717791;
  }
  &::before {
    z-index: 100;
    animation: spin 1s infinite;
  }
  &::after {
    border: 6px solid #c4c4c4;
  }
`;
const Loading = () => {
  return (
    <Row align="middle" justify="center" className="h-screen">
      <div>
        <StyledLoading />
        <Text mt="4px" bold className="text-header-table opacity-50">
          Đang tải dữ liệu...
        </Text>
      </div>
    </Row>
  );
};

export default Loading;
