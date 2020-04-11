/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import RestTable from 'components/common/RestTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import actions from 'redux/utils/actions';
// import useRouter from 'hooks/useRouter';
// import { hashSearchParams } from 'utils/url';
import { EditOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import {
  Popconfirm,
  Switch,
  Button,
  Tooltip,
  Table as AntTable,
  Avatar,
} from 'antd';
import actions from 'redux/utils/actions';
// import TooltipIcon from 'components/common/TooltipIcon';
import useRouter from 'hooks/useRouter';

const Table = () => {
  const dispatch = useDispatch();
  const { handlePushModal } = useRouter();
  const handleConfirm = (id) => {
    dispatch(
      actions.guides.editData({
        customResource: `company/guides/${id}/status`,
      }),
    );
  };
  const data = useSelector((state) => state.branches.data);
  const guides = useSelector((state) => state.guides.allData);

  const handeDeleteGuide = (id) => () => {
    dispatch(
      actions.guides.customData({
        method: 'DELETE',
        customResource: `company/guides/${id}`,
        hasActionAfterSucess: false,
      }),
    ).then(() => {
      const guide = guides.find((e) => e?.[PRIMARY_KEY] === id);
      dispatch(
        actions.guides.getAllData({
          customResource: `company/branches/${data?.[PRIMARY_KEY]}/guides`,
        }),
      );
    });
  };

  const pushModal = (e, routerState) => () => {
    handlePushModal(e, routerState);
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 100,
      key: 'key',
    },
    {
      title: 'Tên',
      dataIndex: ['desc', 'vi'],
      key: 'descVi',
      width: '40%',
    },
    {
      title: 'Items',
      dataIndex: ['items', 'length'],
      key: 'numberOfChildren',
      render: (row) => <span>{row || 0}</span>,
    },
    {
      title: 'Thứ tự',
      dataIndex: 'order',
      key: 'order ',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'active',
      key: 'active',
      render: (row, data) => (
        <Popconfirm
          title={`Bạn có muốn ${row ? 'đóng' : 'mở'} hướng dẫn này?`}
          onConfirm={() => handleConfirm(data?.[PRIMARY_KEY])}
        >
          <Switch checked={row} />
        </Popconfirm>
      ),
      width: 100,
    },
    {
      dataIndex: PRIMARY_KEY,
      key: PRIMARY_KEY,
      render: (row) => (
        <Tooltip title="Chỉnh sửa hướng dẫn">
          <Button
            size="middle"
            icon={<EditOutlined />}
            onClick={pushModal('#guides/edit', {
              id: row,
            })}
          />
        </Tooltip>
      ),
      width: 100,
    },
    {
      dataIndex: PRIMARY_KEY,
      key: PRIMARY_KEY,
      render: (row, data) => (
        <Tooltip title="Tạo item cho hướng dẫn">
          <Button
            size="middle"
            icon={<PlusOutlined />}
            onClick={pushModal('#guides/createItem', {
              guide: data,
            })}
          />
        </Tooltip>
      ),
    },
  ];

  const columnsExpandable = [
    {
      title: '#',
      dataIndex: 'key',
      width: 100,
      key: 'key',
      render: (row, data, index) => <span>{index + 1}</span>,
    },
    {
      dataIndex: 'icon',
      width: 100,
      key: 'icon',
      render: (row, data) => <Avatar src={row?.sizes?.sm?.url} />,
    },
    {
      title: 'Tiếng Việt',
      dataIndex: ['desc', 'vi'],
      key: 'descVi',
      width: '40%',
    },
    {
      title: 'Tiếng Anh',
      dataIndex: ['desc', 'en'],
      key: 'descVi',
      width: '40%',
    },
    {
      dataIndex: PRIMARY_KEY,
      key: PRIMARY_KEY,
      width: 100,
      render: (row, data) => {
        return (
          <Popconfirm
            title="Bạn có muốn xoá item này?"
            onConfirm={handeDeleteGuide(row)}
          >
            <Button size="middle" icon={<DeleteOutlined />} />
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <RestTable
      expandable={{
        expandedRowRender: (record, index) => (
          <div style={{ padding: 15 }} key={String(index)}>
            <AntTable
              dataSource={record?.items}
              pagination={false}
              columns={columnsExpandable}
            />
          </div>
        ),
      }}
      columns={columns}
      resource="guides"
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
