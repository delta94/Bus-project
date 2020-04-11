/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { formatNumberToMoney, formatDateUnix } from 'utils/textUtils';
import RestTable from 'components/common/RestTable';
import { Tag, notification } from 'antd';
import useCopyClipBoard from 'hooks/useCopyClipBoard';
import { compactString } from 'utils/string';
import useRouter from 'hooks/useRouter';
import { hashSearchParams } from 'utils/url';
import MaterialSearch from 'components/common/MaterialSearch';
import { CopyOutlined } from '@ant-design/icons';
import TooltipIcon from 'components/common/TooltipIcon';
import { STATUS } from 'components/Transactions/utils';

const BranchTransactions = () => {
  const [, handleCopy] = useCopyClipBoard();
  const { handlePushParams, query } = useRouter();

  const handleSearch = (e) => {
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
  const columns = [
    {
      title: '#',
      dataIndex: 'key',
      width: 100,
      key: 'key',
    },
    {
      title: 'Người dùng',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Giá trị',
      dataIndex: ['bill', 'amount'],
      key: 'billAmount',
      render: (row) => (
        <p className="text-14-16 text-title">{formatNumberToMoney(row)}</p>
      ),
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
      render: (row) => <p>{formatDateUnix(row, 'DD/MM/YYYY HH:MM')}</p>,
      sorter: true,
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
    },
  ];
  return (
    <RestTable
      columns={columns}
      resource="transactions"
      title="Lịch sử giao dịch"
      placeholderSearch="Tìm kiếm đơn hàng"
      scroll={{ x: 1000 }}
      hasCreateButton={false}
      extra=<MaterialSearch
        defaultValue={
          query.q && JSON.parse(query.q.replace(/%22/g, '"')).billID
        }
        placeholder="Tìm kiếm đơn hàng"
        onSearch={handleSearch}
      />
    />
  );
};

BranchTransactions.propTypes = {};

BranchTransactions.defaultProps = {};

export default BranchTransactions;
