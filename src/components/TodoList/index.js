import React from 'react';
import Box from '@/components/common/Box/Box';
import SideBar from './SideBar';

const TodoList = () => {
  return (
    <Box border="1px solid #dae1e7">
      <SideBar />
    </Box>
  );
};

TodoList.propTypes = {};

export default TodoList;
