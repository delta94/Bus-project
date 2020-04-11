/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { notification, Button, Input } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

const SearchIcon = styled(SearchOutlined)`
  color: ${({ theme, filtered }) =>
    filtered ? theme.palette.primary : undefined} !important;
`;

const createColumn = ({
  title,
  dataIndex,
  width,
  key,
  render,
  searcher = false,
  sorter = false,
}) => {
  const handleSearch = (e, dataIndex, confirm) => {
    if (e?.length > 1) {
      confirm();
    } else {
      notification.error({
        message: 'Length must be greater than 1',
      });
    }
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Tìm kiếm"
          value={selectedKeys}
          onChange={(e) => setSelectedKeys(e.target.value)}
          onPressEnter={() => handleSearch(selectedKeys, dataIndex, confirm)}
          style={{ width: 200, marginBottom: 6, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, dataIndex, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => {
            setSelectedKeys(undefined);
            confirm();
          }}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchIcon type="search" filtered={filtered ? 1 : 0} />
    ),
  });

  return {
    title,
    dataIndex,
    key,
    render,
    width,
    ...(sorter && { sorter: (a, b) => a?.[dataIndex] - b?.[dataIndex] }),
    ...(searcher && getColumnSearchProps(key)),
  };
};

export default createColumn;
