import { Card, Col, Row, Skeleton } from 'antd';
import FilterTabPane from 'components/common/FilterTabPane';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatNumber, formatNumberToMoney } from 'utils/textUtils';
import AnalyticChart from './AnalyticChart';

const DataAnalytic = () => {
  const data = useSelector((state) => state.transactions);
  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <FilterTabPane />
      </div>
      <Row gutter={20}>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          {data.loading === 'analytic' ? (
            <Skeleton active />
          ) : (
            <Card title="Tổng số giao dịch">
              {formatNumber(data?.analytic?.totalTransaction)}
            </Card>
          )}
        </Col>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          {data.loading === 'analytic' ? (
            <Skeleton active />
          ) : (
            <Card title="Tổng số tiền">
              {formatNumberToMoney(data?.analytic?.totalAmount)}
            </Card>
          )}
        </Col>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          {data.loading === 'analytic' ? (
            <Skeleton active />
          ) : (
            <Card title="Tổng số khách hàng">
              {formatNumber(data?.analytic?.totalCustomers)}
            </Card>
          )}
        </Col>
      </Row>
      <AnalyticChart />
    </>
  );
};

DataAnalytic.propTypes = {};

export default DataAnalytic;
