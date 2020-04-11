/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Popconfirm, Tag, notification, Select } from 'antd';
import useRouter from 'hooks/useRouter';
import MaterialSearch from 'components/common/MaterialSearch';
import { hashSearchParams, DEFAULT_QUERY } from 'utils/url';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/utils/actions';
import { getCity } from 'utils/city';
import TooltipIcon from 'components/common/TooltipIcon';
import RestTable from 'components/common/RestTable';
import { EditOutlined } from '@ant-design/icons';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';

const Table = () => {
  const dispatch = useDispatch();
  const { handlePushParams, query } = useRouter();
  const company = useSelector((state) => state.companies.data);
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

  const handleConfirm = (id) => {
    dispatch(
      actions.branches.editData({
        customResource: `company/branches/${id}/status`,
      }),
    ).then(() => {
      dispatch(
        actions.companies.getDataById({
          customResource: 'company/companies',
          id: query.id,
        }),
      );
      dispatch(
        actions.companies.getSummary({
          id: query.id,
        }),
      );
    });
  };

  const handleSelectCity = (e) => {
    dispatch(
      actions.branches.getAllData({
        customResource: `company/companies/${query.id}/branches`,
        query: `${DEFAULT_QUERY}${e !== 'all' ? `&city=${e}` : ''}`,
      }),
    );
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
      width: 60,
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
      render: (row) => (
        <img
          src={row?.sizes?.sm?.url}
          className="object-contain"
          style={{ width: '120px' }}
        />
      ),
    },
    {
      title: 'Tên chi nhánh',
      dataIndex: 'name',
      key: 'name',
      render: (row, data) => (
        <Link to={`/branches/${data?.[PRIMARY_KEY]}`}>{row}</Link>
      ),
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Địa chỉ',
      dataIndex: ['address', 'display'],
      key: 'address.display',
    },
    {
      title: 'Thành phố',
      dataIndex: 'city',
      key: 'city',
      render: (row) => <p>{getCity(row)}</p>,
      sorter: (a, b) => a.city - b.city,
    },
    {
      title: 'Danh mục',
      dataIndex: 'categories',
      key: 'categories',
      render: (categories) => (
        <div>
          {categories?.map((category, index) => {
            return (
              <Tag
                style={{ marginTop: 5 }}
                color="geekblue"
                key={String(index)}
              >
                {category.name.vi.toUpperCase()}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: 'Liên hệ',
      dataIndex: ['contact', 'phone'],
      key: 'contact.phone',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      render: (row, data) => (
        <Popconfirm
          title={`Bạn có muốn ${row ? 'đóng' : 'mở'} chi nhánh này?`}
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
        <Link to={`/branches/${row}`}>
          <TooltipIcon
            title="Xem chi tiết chi nhánh"
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
    <div>
      <div className="flex justify-end" style={{ marginBottom: 20 }}>
        <Select
          defaultValue={query?.active || 'all'}
          onSelect={handleSelectCity}
          style={{ marginRight: '10px', width: 200 }}
        >
          <Select.Option key="all"> Toàn bộ: Thành phố </Select.Option>
          {company?.cities?.map((e) => (
            <Select.Option key={e}>{getCity(e)}</Select.Option>
          ))}
        </Select>
        <Select
          defaultValue={query?.active || 'all'}
          onSelect={
            (value) =>
              handlePushParams({ active: value === 'all' ? '' : value })
            // eslint-disable-next-line react/jsx-curly-newline
          }
          style={{ marginRight: '10px', width: 200 }}
        >
          <Select.Option key="all"> Toàn bộ: Trạng thái</Select.Option>
          <Select.Option key="true"> Đã kích hoạt</Select.Option>
          <Select.Option key="false"> Chưa kích hoạt</Select.Option>
        </Select>
        <MaterialSearch
          style={{ width: 200, marginRight: '10px' }}
          defaultValue={
            query.q && JSON.parse(query.q.replace(/%22/g, '"')).name
          }
          placeholder="Tìm kiếm chi nhánh"
          onSearch={handleSearch}
        />
      </div>
      <RestTable
        columns={columns}
        resource="branches"
        title="Chi nhánh"
        scroll={{ x: 1200 }}
      />
    </div>
  );
};

export default Table;
