/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { Switch, Popconfirm, Select } from 'antd';
import { formatDateUnix } from 'utils/textUtils';
import actions from 'redux/utils/actions';
import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import { EditOutlined } from '@ant-design/icons';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import RestTable from 'components/common/RestTable';

const Table = () => {
  const dispatch = useDispatch();
  const { handlePushModal, query, handlePushParams } = useRouter();
  const handleConfirm = (id) => {
    dispatch(
      actions.categories.editData({
        customResource: `company/categories/${id}/status`,
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
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      align: 'center',
      render: (row) => <img src={row?.sizes?.sm?.url} />,
      width: 200,
    },
    {
      title: 'Tên danh mục',
      dataIndex: ['name', 'vi'],
      key: 'name.vi',
      align: 'center',
    },
    {
      title: 'Thứ tự',
      dataIndex: 'order',
      key: 'order',
      sorter: true,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (row) => <p>{formatDateUnix(row, 'DD/MM/YYYY HH:MM')}</p>,
      sorter: true,
    },
    {
      title: 'Ngày cập nhật',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (row) => <p>{formatDateUnix(row, 'DD/MM/YYYY HH:MM')}</p>,
      sorter: true,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      render: (row, data) => (
        <Popconfirm
          title={`Bạn có muốn ${row ? 'đóng' : 'mở'} danh mục này?`}
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
        <EditOutlined
          onClick={() =>
            handlePushModal('categories/edit', {
              id: row,
            })
          }
          className="cursor-pointer"
          style={{ fontSize: 20, color: 'green', marginRight: '8px' }}
        />
      ),
      width: 100,
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="categories"
      title="Danh sách danh mục"
      placeholderSearch="Tìm kiếm danh mục"
      extra=<div className="flex">
        <Select
          defaultValue={query?.active || 'all'}
          onSelect={
            (value) =>
              handlePushParams({ active: value === 'all' ? '' : value })
            // eslint-disable-next-line react/jsx-curly-newline
          }
          style={{ marginRight: '10px', width: 200 }}
        >
          <Select.Option key="all">Tất cả trạng thái</Select.Option>
          <Select.Option key="true"> Đã kích hoạt</Select.Option>
          <Select.Option key="false"> Chưa kích hoạt</Select.Option>
        </Select>
      </div>
    />
  );
};

export default Table;
