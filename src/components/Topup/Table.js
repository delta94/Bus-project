/* eslint-disable react/jsx-curly-newline */
import { EditOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { DatePicker, Select, Tag } from 'antd';
import FetchSelect from 'components/common/FetchSelect';
import RestTable from 'components/common/RestTable';
import TooltipIcon from 'components/common/TooltipIcon';
import SelectBranches from 'components/Transactions/SelectBranches';
import { STATUS } from 'components/Transactions/utils';
import useRouter from 'hooks/useRouter';
import moment from 'moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_KEY } from 'redux/utils/crudSlice';
import { formatNumberToMoney } from 'utils/textUtils';
import { TYPE } from './utils';

const Table = () => {
  const {
    handlePushParams,
    handlePushModal,
    query,
    removeParams,
  } = useRouter();
  const [companyID, setCompanyID] = useState([]);

  const changeDate = (e) => {
    if (e) {
      handlePushParams({
        fromDate: moment(e?.[0]).format('DD-MM-YYYY'),
        toDate: moment(e?.[1]).format('DD-MM-YYYY'),
      });
    } else {
      removeParams(['fromDate', 'toDate']);
    }
  };
  const handleSearch = (e, key) => {
    if (e.length === 0) {
      removeParams([key]);
    } else {
      handlePushParams({
        [key]: JSON.stringify(e),
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
      title: 'Công ty',
      dataIndex: 'companyName',
      key: 'companyName',
      render: (row, data) => (
        <Link to={`/companies/${data?.companyID}`}>{row}</Link>
      ),
    },
    {
      title: 'Chi nhánh',
      dataIndex: 'branchName',
      key: 'branchName',
      render: (row, data) => (
        <Link to={`/branches/${data?.branchID}`}>{row}</Link>
      ),
    },
    {
      title: 'Kiểu',
      dataIndex: 'type',
      key: 'type',
      render: (row) => (
        <Tag color={TYPE?.[row]?.color}>{TYPE?.[row]?.text}</Tag>
      ),
    },
    {
      title: 'Số tiền',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (row) => (
        <p className="text-14-16 text-title">{formatNumberToMoney(row)}</p>
      ),
    },
    {
      title: 'Số tiền hiện tại',
      dataIndex: 'currentAmount',
      key: 'currentAmount',
      align: 'right',
      render: (row) => (
        <p className="text-14-16 text-title">{formatNumberToMoney(row)}</p>
      ),
    },

    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (row) => (
        <Tag color={STATUS?.[row]?.color}>{STATUS?.[row]?.text}</Tag>
      ),
    },
    {
      dataIndex: PRIMARY_KEY,
      key: PRIMARY_KEY,
      render: (row, data) => {
        if (data.status === 'pending') {
          return (
            <TooltipIcon
              title="Thay đổi trạng thái Topup"
              onClick={() =>
                handlePushModal('#topup/status', {
                  id: row,
                  status: data.status,
                })
              }
              icon={EditOutlined}
              style={{ fontSize: 20, color: 'green' }}
            />
          );
        }
        return null;
      },
    },
    {
      dataIndex: PRIMARY_KEY,
      key: PRIMARY_KEY,
      render: (row) => (
        <Link to={`/topup/${row}`}>
          <TooltipIcon
            title="Xem chi tiết Topup"
            icon={InfoCircleOutlined}
            style={{ fontSize: 20, color: 'green' }}
          />
        </Link>
      ),
    },
  ];
  return (
    <>
      <div style={{ marginBottom: 20 }} className="flex justify-between">
        <Select
          value={query?.type || 'all'}
          onSelect={(value) =>
            handlePushParams({
              type: value === 'all' ? '' : value,
            })
          }
          style={{ marginRight: 10, width: 200 }}
        >
          <Select.Option key="all"> Toàn bộ: Kiểu </Select.Option>
          <Select.Option key="cashback"> Cashback </Select.Option>
          <Select.Option key="topup"> Topup </Select.Option>
        </Select>
        <Select
          defaultValue={query?.active || 'all'}
          onSelect={
            (value) =>
              handlePushParams({
                status: value === 'all' ? '' : value,
              })
            // eslint-disable-next-line react/jsx-curly-newline
          }
          style={{ marginRight: 10, width: 200 }}
        >
          <Select.Option key="all"> Toàn bộ: Trạng thái </Select.Option>
          <Select.Option key="completed"> Đã kích hoạt</Select.Option>
          <Select.Option key="pending"> Chờ Duyệt </Select.Option>
          <Select.Option key="rejected"> Từ Chối</Select.Option>
        </Select>
        <FetchSelect
          mode="multiple"
          placeholder="Tìm kiếm theo công ty"
          style={{ width: 300, marginRight: 10 }}
          resource="companies"
          customResource="company/companies"
          value={
            query.companyID
              ? JSON.parse(query.companyID.replace(/%22/g, '"'))
              : []
          }
          onChange={(e) => {
            handleSearch(e, 'companyID');
            setCompanyID(e);
          }}
          filterOption={false}
        />
        <SelectBranches
          mode="multiple"
          placeholder="Tìm kiếm theo chi nhánh"
          style={{ width: 300, marginRight: 10 }}
          companyID={companyID}
          value={
            query.branchID
              ? JSON.parse(query.branchID.replace(/%22/g, '"'))
              : []
          }
          onChange={(e) => {
            handleSearch(e, 'branchID');
          }}
          filterOption={false}
        />
        <DatePicker.RangePicker
          style={{ marginRight: 10 }}
          onChange={changeDate}
          format="DD/MM/YYYY"
          value={
            query.fromDate && query.toDate
              ? [
                  moment(query.fromDate, 'DD-MM-YYYY'),
                  moment(query.toDate, 'DD-MM-YYYY'),
                ]
              : []
          }
        />
      </div>
      <RestTable columns={columns} resource="topup" />
    </>
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
