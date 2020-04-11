/* eslint-disable consistent-return */
import { Tabs } from 'antd';
import useRouter from 'hooks/useRouter';
import React from 'react';
import styled from 'styled-components';
import {
  rangeMonth,
  rangeToday,
  rangeWeek,
  range6MonthBefore,
  rangeYesterday,
} from 'utils/time';

const { TabPane } = Tabs;

const StyledFilterTabPane = styled(Tabs)`
  .ant-tabs-bar {
    border-bottom: none;
  }
  .ant-tabs-nav,
  .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-nav .ant-tabs-tab:hover {
    font: normal 600 14px/17px 'Inter';
    font-weight: 600;
    color: #212121;
  }
  .ant-tabs-nav .ant-tabs-tab {
    padding: 16px 0px;
  }
  .ant-tabs-ink-bar {
    background-color: #2979ff;
    height: 3px;
  }
`;

const FilterTabPane = () => {
  const { query, handlePushParams } = useRouter();

  const handleChange = (e) => {
    switch (e) {
      case '1':
        handlePushParams(rangeToday);
        break;
      case '2':
        handlePushParams(rangeYesterday);
        break;
      case '3':
        handlePushParams(rangeWeek);
        break;
      case '4':
        handlePushParams(rangeMonth);
        break;
      case '5':
        handlePushParams(range6MonthBefore);
        break;
      default:
        break;
    }
  };

  const getDefaultValue = () => {
    switch (JSON.stringify({ start: query.start, end: query.end })) {
      case JSON.stringify(rangeToday):
        return '1';
      case JSON.stringify(rangeYesterday):
        return '2';
      case JSON.stringify(rangeWeek):
        return '3';
      case JSON.stringify(rangeMonth):
        return '4';
      case JSON.stringify(range6MonthBefore):
        return '5';
      default:
        break;
    }
  };

  return (
    <StyledFilterTabPane
      defaultActiveKey={getDefaultValue()}
      activeKey={getDefaultValue()}
      onChange={handleChange}
    >
      <TabPane tab="Hôm nay" key="1" />
      <TabPane tab="Hôm qua" key="2" />
      <TabPane tab="7 ngày trước" key="3" />
      <TabPane tab="30 ngày trước" key="4" />
      <TabPane tab="90 ngày trước" key="5" />
    </StyledFilterTabPane>
  );
};

FilterTabPane.propTypes = {};

export default FilterTabPane;
