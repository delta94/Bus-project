import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const StyledSideBar = styled.div`
  padding: 20px;
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <Button type="primary">Add Task</Button>
      All
    </StyledSideBar>
  );
};

SideBar.propTypes = {};

export default SideBar;
