import React from 'react';
import { Row, Col, Card } from 'antd';
import { useSelector } from 'react-redux';
import { formatNumberToMoney, formatNumber } from 'utils/textUtils';
import FilterTabPane from 'components/common/FilterTabPane';
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
          <Card title="Tổng số giao dịch">
            {formatNumber(+data?.analytic?.totalTransaction)}
          </Card>
        </Col>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          <Card title="Tổng số tiền">
            {formatNumberToMoney(+data?.analytic?.totalAmount)}
          </Card>
        </Col>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          <Card title="Tổng số khách hàng">
            {formatNumber(+data?.analytic?.totalCustomer)}
          </Card>
        </Col>
      </Row>
      <AnalyticChart />
    </>
  );
};

DataAnalytic.propTypes = {};

export default DataAnalytic;
