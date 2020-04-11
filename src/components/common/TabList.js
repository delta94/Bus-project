import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const TabList = ({ onTabChange, tabList, tab }) => {
  return (
    <Card tabList={tabList} onTabChange={onTabChange}>
      {tabList.find((e) => e.key === tab).component}
    </Card>
  );
};

TabList.propTypes = {
  tabList: PropTypes.array,
  onTabChange: PropTypes.func,
  tab: PropTypes.string,
};

TabList.defaultProps = {
  tabList: [],
};

export default TabList;
