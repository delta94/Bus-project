/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { testSearchParams } from 'utils/url';
import RestTable from 'components/common/RestTable';
import { formatDate } from 'utils/textUtils';
import { Link } from 'react-router-dom';
import { compactString } from 'utils/string';
import MaterialSearch from 'components/common/MaterialSearch';
import { DatePicker } from 'antd';
import useRouter from 'hooks/useRouter';
import TooltipIcon from 'components/common/TooltipIcon';
import { CopyOutlined, InfoCircleOutlined } from '@ant-design/icons';
import useCopyClipBoard from 'hooks/useCopyClipBoard';
import SelectType from './SelectType';

const Table = () => {
  const { handlePushParams, handlePushModal } = useRouter();
  const [, handleCopy] = useCopyClipBoard();

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 60,
      key: 'key',
    },
    {
      title: 'Tin nhắn',
      dataIndex: 'message',
      key: 'message',
      width: 300,
    },
    {
      title: 'Event Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      render: (row) => <span>{formatDate(row, 'DD MMMM YYYY, hh:mm:ss')}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'ReferencesID',
      dataIndex: 'referencesID',
      key: 'referencesID',
      render: (row) => (
        <span>
          {compactString(row, 5)}
          {row && (
            <TooltipIcon
              title="Copy References ID"
              icon={CopyOutlined}
              className="cursor-pointer"
              style={{ color: 'green' }}
              onClick={handleCopy(row)}
            />
          )}
        </span>
      ),
    },
    {
      title: 'User ID',
      dataIndex: 'userID',
      key: 'userID',
      render: (row) => (
        <span>
          {compactString(row, 5)}
          {row && (
            <TooltipIcon
              title="Copy Topup ID"
              icon={CopyOutlined}
              className="cursor-pointer"
              style={{ color: 'green' }}
              onClick={handleCopy(row)}
            />
          )}
        </span>
      ),
    },
    {
      title: 'Company ID',
      dataIndex: ['data', 'companyID'],
      key: 'companyID',
      render: (row) => (
        <>
          <Link to={`/companies/${row}`}>{compactString(row, 5)}</Link>
          {row && (
            <TooltipIcon
              title="Copy Topup ID"
              icon={CopyOutlined}
              className="cursor-pointer"
              style={{ color: 'green' }}
              onClick={handleCopy(row)}
            />
          )}
        </>
      ),
    },
    {
      title: 'Branch ID',
      dataIndex: ['data', 'branchID'],
      key: 'branchID',
      render: (row) => (
        <>
          <Link to={`/branches/${row}`}>{compactString(row, 5)}</Link>
          {row && (
            <TooltipIcon
              title="Copy Topup ID"
              icon={CopyOutlined}
              className="cursor-pointer"
              style={{ color: 'green' }}
              onClick={handleCopy(row)}
            />
          )}
        </>
      ),
    },
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data',
      align: 'right',
      render: (row) => (
        <TooltipIcon
          title="Xem chi tiết Data"
          icon={InfoCircleOutlined}
          onClick={() =>
            handlePushModal('audit/detail', {
              data: row || null,
            })
          }
          style={{ fontSize: 20, color: 'green' }}
        />
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-between" style={{ marginBottom: 20 }}>
        <SelectType style={{ marginRight: 20 }} />
        <MaterialSearch
          placeholder="Company ID"
          style={{ width: 200, marginRight: 20 }}
          onSearch={(e) => handlePushParams({ companyID: e })}
        />
        <MaterialSearch
          placeholder="Branch ID"
          style={{ width: 200, marginRight: 20 }}
          onSearch={(e) => handlePushParams({ branchID: e })}
        />
        <MaterialSearch
          placeholder="ReferencesID ID"
          style={{ width: 200, marginRight: 20 }}
          onSearch={(e) => handlePushParams({ referencesID: e })}
        />
        <MaterialSearch
          placeholder="User ID"
          style={{ width: 200, marginRight: 20 }}
          onSearch={(e) => handlePushParams({ userID: e })}
        />
        <DatePicker.RangePicker
          onChange={(e) =>
            handlePushParams({
              fromDate: e?.[0].toISOString() || '',
              toDate: e?.[1].toISOString() || '',
            })
          }
          format="DD/MM/YYYY"
          style={{ width: 250, marginRight: 20 }}
        />
      </div>
      <RestTable
        columns={columns}
        resource="audit"
        title="Danh sách audit"
        hasCreateButton={false}
        formatFilters={testSearchParams}
      />
    </>
  );
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
