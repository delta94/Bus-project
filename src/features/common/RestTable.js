/* eslint-disable max-lines */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { Table, Card, Button, Dropdown, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import useRouter from '@/hooks/useRouter';
import CardTitle from '@/components/common/CardTitle';
import PropTypes from 'prop-types';
import { hashSortParams } from '@/utils/url';
import {
  ColumnHeightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import { isNull } from '@/utils/validateUtils';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import TooltipIcon from '@/components/common/TooltipIcon';
import { useTranslation } from 'react-i18next';
import ResizeableTitle from '@/components/common/ResizeableTitle';
import RestExportExcel from '@/features/common/RestExportExcel';

const RestTable = ({
  title,
  columns,
  resource,
  action: {
    hasCreateButton = true,
    hasToggleFullScreen = true,
    hasExportExcelButton = true,
    extra,
  },
  expandable,
  scroll,
  onChange,
  formatFilters,
  pagination,
  bordered,
}) => {
  const { t } = useTranslation();

  const data = useSelector((state) => state[resource]);
  const { query, handlePushModal, handlePushParams } = useRouter();
  const [size, setSize] = useState('default');
  const handle = useFullScreenHandle();

  const handlePaginate = (pagination, filters, sorter) => {
    const sort = hashSortParams(sorter.columnKey, sorter.order);
    handlePushParams({
      page: pagination.current,
      limit: pagination.pageSize,
      ...(formatFilters ? formatFilters(filters) : filters),
      sort,
    });
  };

  const components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  return (
    <FullScreen handle={handle}>
      <Card
        title=<CardTitle
          title={title || t(`${resource}.titleTable`)}
          subTitle={`${t('sum')}: ${data?.totalItems}`}
        />
        className="card-padding-body-0"
        extra=<Row align="middle">
          {extra}
          {hasCreateButton && (
            <Button
              type="primary"
              onClick={() => handlePushModal(`${resource}/create`)}
              style={{ marginLeft: 15 }}
            >
              {t('createNew')}
            </Button>
          )}
          {hasExportExcelButton && (
            <RestExportExcel resource={resource} style={{ marginLeft: 15 }} />
          )}
          {hasToggleFullScreen && (
            <TooltipIcon
              title="Open fullscreen"
              icon={handle.active ? FullscreenExitOutlined : FullscreenOutlined}
              onClick={handle.active ? handle.exit : handle.enter}
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
        </Row>
      >
        <Table
          bordered={bordered}
          size={size}
          dataSource={data?.items}
          components={components}
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
          loading={data?.loading === 'getAll'}
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
  action: PropTypes.shape({
    extra: PropTypes.any,
    hasCreateButton: PropTypes.bool,
    hasToggleFullScreen: PropTypes.bool,
    hasExportExcelButton: PropTypes.bool,
  }),
  scroll: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  onChange: PropTypes.func,
  formatFilters: PropTypes.func,
  expandable: PropTypes.any,
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

RestTable.defaultProps = {
  bordered: true,
  action: {
    hasCreateButton: true,
    hasToggleFullScreen: true,
    hasExportExcelButton: true,
  },
  scroll: { x: 1000 },
};

export default RestTable;
