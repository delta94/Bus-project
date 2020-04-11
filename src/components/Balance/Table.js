/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-curly-newline */
import useRouter from 'hooks/useRouter';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatNumberToMoney } from 'utils/textUtils';
import FetchSelect from 'components/common/FetchSelect';
import SelectBranches from 'components/Transactions/SelectBranches';
import RestTable from 'components/common/RestTable';

const Table = () => {
  const { handlePushParams, removeParams, query } = useRouter();
  const [companyID, setCompanyID] = useState([]);

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
      title: 'Số dư hiện tại',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (row) => (
        <p className="text-14-16 text-title">{formatNumberToMoney(row)}</p>
      ),
      sorter: true,
    },
  ];
  return (
    <RestTable
      columns={columns}
      title="Danh sách số dư"
      resource="balances"
      hasCreateButton={false}
      extra=<div className="flex">
        <FetchSelect
          mode="multiple"
          placeholder="Tìm kiếm theo công ty"
          style={{ width: 300, marginRight: 10 }}
          resource="companies"
          customResource="company/companies"
          onChange={(e) => {
            handleSearch(e, 'companyID');
            setCompanyID(e);
          }}
          value={
            query.companyID
              ? JSON.parse(query.companyID.replace(/%22/g, '"'))
              : []
          }
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
      </div>
    />
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
