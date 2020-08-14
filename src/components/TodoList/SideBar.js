import { Button } from 'antd';
import React from 'react';
import Box from 'components/common/Box';

const SideBar = () => {
  return (
    <Box p="20px">
      <Button type="primary">Add Task</Button>
      All
    </Box>
  );
};

SideBar.propTypes = {};

export default SideBar;
