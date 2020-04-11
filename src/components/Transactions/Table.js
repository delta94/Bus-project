/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { formatNumberToMoney, formatDateUnix } from 'utils/textUtils';
import { Tag, notification } from 'antd';
import useCopyClipBoard from 'hooks/useCopyClipBoard';
import { compactString } from 'utils/string';
import { Link } from 'react-router-dom';
import TooltipIcon from 'components/common/TooltipIcon';
import { testSearchParams, hashSearchParams } from 'utils/url';
import RestTable from 'components/common/RestTable';
import MaterialSearch from 'components/common/MaterialSearch';
import useRouter from 'hooks/useRouter';
import { CopyOutlined } from '@ant-design/icons';
import FetchSelect from 'components/common/FetchSelect';
import { STATUS } from './utils';
import SelectBranches from './SelectBranches';

const Table = () => {
  const [, handleCopy] = useCopyClipBoard();
  const { handlePushParams, query, removeParams } = useRouter();
  const [companyID, setCompanyID] = useState([]);

  const handleSearchBill = (e) => {
    if (e.length === 0 || e.length > 1) {
      handlePushParams({
        q: hashSearchParams('billID', e),
      });
    } else {
      notification.error({
        message: 'Length must be greater than 1',
      });
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
      title: 'Người dùng',
      dataIndex: 'userName',
      key: 'userName',
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
      title: 'Giá trị',
      dataIndex: ['bill', 'amount'],
      key: 'billAmount',
      render: (row) => (
        <p className="text-14-16 text-title">{formatNumberToMoney(row)}</p>
      ),
      sorter: true,
    },
    {
      title: 'Hoàn tiền',
      dataIndex: 'cashback',
      key: 'cashback',
      width: '10%',
      render: (row) => (
        <p className="text-14-16 text-title">
          {formatNumberToMoney(row?.amount)}
        </p>
      ),
      sorter: true,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '14%',
      render: (row) => <p>{formatDateUnix(row, 'DD/MM/YYYY HH:MM')}</p>,
      sorter: (a, b) => a.createdAt - b.createdAt,
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
      title: 'Mã đơn hàng',
      dataIndex: ['bill', 'id'],
      key: 'billID',
      render: (row) => (
        <div className="flex justify-center items-center">
          <p style={{ marginRight: '8px' }}>{compactString(row)}</p>
          <TooltipIcon
            title="Copy mã đơn hàng"
            icon={CopyOutlined}
            className="cursor-pointer"
            style={{ color: 'green' }}
            onClick={handleCopy(row)}
          />
        </div>
      ),
      hasSearch: true,
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="transactions"
      title="Lịch sử giao dịch"
      hasCreateButton={false}
      formatFilters={testSearchParams}
      extra=<div className="flex">
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
        <MaterialSearch
          style={{ width: 200 }}
          defaultValue={
            query.q && JSON.parse(query.q.replace(/%22/g, '"')).billID
          }
          placeholder="Tìm kiếm đơn hàng"
          onSearch={handleSearchBill}
        />
      </div>
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
