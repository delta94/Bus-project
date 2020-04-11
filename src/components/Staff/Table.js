/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-closing-tag-location */
import { EditOutlined } from '@ant-design/icons';
import { Avatar, Popconfirm, Switch, Tag } from 'antd';
import RestTable from 'components/common/RestTable';
import React from 'react';
// import { useDispatch } from 'react-redux';
import useRouter from 'hooks/useRouter';
import actions from 'redux/utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';

const Table = () => {
  const dispatch = useDispatch();
  const { handlePushModal, location } = useRouter();
  const company = useSelector((state) => state.companies.data);
  const handleConfirm = (id) => {
    dispatch(
      actions.staff.customData({
        customResource: `crm-staffs/${id}/status`,
        prefix: 'admin/user',
        method: 'PATCH',
        customURL: 'https://svc.cashbagmain.com/',
        data: {
          company: company?.[PRIMARY_KEY],
        },
      }),
    ).then(() => {
      dispatch(
        actions.staff.getAllData({
          customResource: 'crm-staffs',
          query: `${location.search}&company=${company?.[PRIMARY_KEY]}`,
          customURL: 'https://svc.cashbagmain.com/',
          prefix: 'admin/user',
        }),
      );
    });
  };
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 60,
      key: 'key',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (row) => (
        <Avatar
          size={50}
          src={row?.sizes?.small?.url}
          className="object-contain"
          alt=""
        />
      ),
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 300,
    },
    {
      title: 'Quản lý',
      dataIndex: ['company', 'type'],
      key: ['company', 'type'],
      width: 300,
      render: (row, data) => {
        if (row === 'company') {
          return <p> Toàn bộ </p>;
        }
        return data.company.branches?.map((e, index) => {
          return (
            <Tag style={{ marginTop: 5 }} color="geekblue" key={String(index)}>
              {e.name.toUpperCase()}
            </Tag>
          );
        });
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: ['company', 'active'],
      key: ['company', 'active'],
      render: (row, data) => (
        <Popconfirm
          title={`Bạn có muốn ${row ? 'đóng' : 'mở'} nhân viên này?`}
          onConfirm={() => handleConfirm(data?._id)}
        >
          <Switch checked={row} />
        </Popconfirm>
      ),
    },

    {
      dataIndex: '_id',
      key: '_id',
      render: (row, data) => (
        <EditOutlined
          onClick={() =>
            handlePushModal('staff/edit', {
              id: row,
              data,
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
      resource="staff"
      title="Danh sách nhân viên"
      scroll={{ x: 1400 }}
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
