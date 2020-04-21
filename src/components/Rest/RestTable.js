/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { Table, Card, Button, Dropdown, Menu } from 'antd';
import { useSelector } from 'react-redux';
import useRouter from 'hooks/useRouter';
import CardTitle from 'components/common/CardTitle';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { hashSortParams } from 'utils/url';
import {
  ColumnHeightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import { isNull } from 'utils/validateUtils';
import FullScreen from 'react-full-screen';
import TooltipIcon from 'components/common/TooltipIcon';

const RestTable = ({
  title,
  columns,
  resource,
  extra,
  expandable,
  scroll,
  hasCreateButton,
  hasToggleFullScreen,
  onChange,
  formatFilters,
  pagination,
  bordered,
}) => {
  const data = useSelector((state) => state[resource]);
  const { query, handlePushModal, handlePushParams } = useRouter();
  const [size, setSize] = useState('default');
  const [isFull, setFull] = useState(false);

  const handlePaginate = (
    pagination,
    filters,
    sorter,
    // { currentDataSource } = extra,
  ) => {
    const q = hashSortParams(sorter.columnKey, sorter.order);
    handlePushParams({
      page: pagination.current,
      limit: pagination.pageSize,
      ...(formatFilters ? formatFilters(filters) : filters),
      q,
    });
  };

  return (
    <FullScreen enabled={isFull} onChange={(isFull) => setFull(isFull)}>
      <Card
        title=<CardTitle
          title={title || i18next.t(`${resource}.titleTable`)}
          subTitle={`Tổng số: ${data?.totalItems}`}
        />
        className="card-padding-body-0"
        extra=<div className="flex items-center">
          {extra}
          {hasCreateButton && (
            <Button
              type="primary"
              onClick={() => handlePushModal(`${resource}/create`)}
            >
              Tạo mới
            </Button>
          )}
          {hasToggleFullScreen && (
            <TooltipIcon
              title="Open fullscreen"
              icon={isFull ? FullscreenExitOutlined : FullscreenOutlined}
              onClick={() => setFull(!isFull)}
              className="cursor-pointer"
              style={{ marginLeft: 15, fontSize: 18 }}
            />
          )}
          <Dropdown
            overlay=<Menu>
              <Menu.Item onClick={() => setSize('small')}>Small</Menu.Item>
              <Menu.Item onClick={() => setSize('middle')}>Middle</Menu.Item>
              <Menu.Item onClick={() => setSize('default')}>Default</Menu.Item>
            </Menu>
            className="cursor-pointer"
          >
            <ColumnHeightOutlined
              title="Open fullscreen"
              style={{ marginLeft: 15, fontSize: 18 }}
            />
          </Dropdown>
        </div>
      >
        <Table
          bordered={bordered}
          size={size}
          dataSource={data?.items}
          columns={columns}
          onChange={onChange || handlePaginate}
          expandable={expandable}
          pagination={
            isNull(pagination)
              ? {
                  current: +query.page,
                  total: data?.totalItems,
                  pageSize: query?.limit || 10,
                  showQuickJumper: true,
                  showSizeChanger: true,
                }
              : false
          }
          loading={data?.loading}
          scroll={scroll}
        />
      </Card>
    </FullScreen>
  );
};

RestTable.propTypes = {
  bordered: PropTypes.bool,
  columns: PropTypes.array,
  resource: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.any,
  scroll: PropTypes.object,
  hasCreateButton: PropTypes.bool,
  hasToggleFullScreen: PropTypes.bool,
  onChange: PropTypes.func,
  formatFilters: PropTypes.func,
  expandable: PropTypes.any,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

RestTable.defaultProps = {
  bordered: true,
  hasCreateButton: true,
  hasToggleFullScreen: false,
};

export default RestTable;
