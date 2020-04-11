/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Popconfirm, notification, Select } from 'antd';
import { useDispatch } from 'react-redux';
import actions from 'redux/utils/actions';
import MaterialSearch from 'components/common/MaterialSearch';
import useRouter from 'hooks/useRouter';
import { hashSearchParams } from 'utils/url';
import { getCity } from 'utils/city';
import TooltipIcon from 'components/common/TooltipIcon';
import { isNull } from 'utils/validateUtils';
import { EditOutlined } from '@ant-design/icons';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import RestTable from 'components/common/RestTable';

const Table = () => {
  const dispatch = useDispatch();
  const { handlePushParams, query } = useRouter();
  const handleConfirm = (id) => {
    dispatch(
      actions.companies.editData({
        customResource: `company/companies/${id}/status`,
      }),
    );
  };
  const handleSearch = (e) => {
    if (e.length === 0 || e.length > 1) {
      handlePushParams({
        q: hashSearchParams('name', e),
      });
    } else {
      notification.error({
        message: 'Length must be greater than 1',
      });
    }
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 60,
      key: 'key',
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (row) => (
        <img
          src={row?.sizes?.sm?.url}
          className="object-contain"
          style={{ width: '120px', height: '120px' }}
        />
      ),
    },
    {
      title: 'Tên công ty',
      dataIndex: 'name',
      key: 'name',
      render: (row, data) => (
        <Link to={`/companies/${data?.[PRIMARY_KEY]}`}>{row}</Link>
      ),
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Địa chỉ',
      dataIndex: ['contact', 'address', 'map'],
      key: 'address.display',
      width: 300,
    },
    {
      title: 'Thành phố',
      dataIndex: ['contact', 'city'],
      key: 'city',
      render: (row) => <p>{getCity(row)}</p>,
      sorter: true,
    },
    {
      title: 'Liên hệ',
      dataIndex: ['contact', 'phone'],
      key: 'contact.phone',
    },
    {
      title: 'Tổng Chi nhánh',
      dataIndex: 'totalBranch',
      key: 'totalBranch',
      render: (row, data) => (
        <p>
          {isNull(data?.totalBranchActive) || isNull(data?.totalBranch)
            ? `0 / 0`
            : `${data?.totalBranchActive} / ${data?.totalBranch}`}
        </p>
      ),
      sorter: (a, b) => a.totalBranch - b.totalBranch,
      align: 'center',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      render: (row, data) => (
        <Popconfirm
          title={`Bạn có muốn ${row ? 'đóng' : 'mở'} công ty này?`}
          onConfirm={() => handleConfirm(data?.[PRIMARY_KEY])}
        >
          <Switch checked={row} />
        </Popconfirm>
      ),
    },
    {
      dataIndex: PRIMARY_KEY,
      key: PRIMARY_KEY,
      render: (row) => (
        <Link to={`/companies/${row}`}>
          <TooltipIcon
            title="Xem chi tiết công ty"
            icon={EditOutlined}
            className="cursor-pointer"
            style={{ fontSize: 20, color: 'green', marginRight: '8px' }}
          />
        </Link>
      ),
      width: 100,
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="companies"
      title="Danh sách công ty"
      extra=<div className="flex">
        <Select
          defaultValue={query?.active || 'all'}
          onSelect={
            (value) =>
              handlePushParams({ active: value === 'all' ? '' : value })
            // eslint-disable-next-line react/jsx-curly-newline
          }
          style={{ marginRight: 10, width: 200 }}
        >
          <Select.Option key="all"> Toàn bộ: Trạng thái </Select.Option>
          <Select.Option key="true"> Đã kích hoạt</Select.Option>
          <Select.Option key="false"> Chưa kích hoạt</Select.Option>
        </Select>
        <MaterialSearch
          style={{ width: 200, marginRight: 10 }}
          defaultValue={
            query.q && JSON.parse(query.q.replace(/%22/g, '"')).name
          }
          placeholder="Tìm kiếm công ty"
          onSearch={handleSearch}
        />
      </div>
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
