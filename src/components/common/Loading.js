import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

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
        <h2
          className="text-600-13-16 text-header-table opacity-50"
          style={{ marginTop: 4 }}
        >
          Đang tải dữ liệu...
        </h2>
      </div>
    </Row>
  );
};

export default Loading;
