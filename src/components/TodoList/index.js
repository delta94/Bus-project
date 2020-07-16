import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

export const StyledTodoList = styled.div`
  border: 1px solid #dae1e7;
`;

const TodoList = () => {
  return (
    <StyledTodoList>
      <SideBar />
    </StyledTodoList>
  );
};

TodoList.propTypes = {};

export default TodoList;
