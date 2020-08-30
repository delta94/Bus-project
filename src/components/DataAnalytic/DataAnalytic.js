import { Card, Col, Row, Skeleton } from 'antd';
import FilterTabPane from '@/components/common/FilterTabPane';
import React from 'react';
import { formatNumber, formatNumberToMoney } from '@/utils/textUtils';
import DateFilter from '@/components/common/DateFilter';
import PropTypes from 'prop-types';
import AnalyticChart from '@/components/Chart/AnalyticChart';

const DataAnalytic = ({ data, loading }) => {
  return (
    <>
      <Row style={{ marginBottom: 20 }} justify="space-between">
        <FilterTabPane />
        <DateFilter />
      </Row>
      <Row gutter={20}>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Card title="Tổng số giao dịch">
              {formatNumber(data?.totalTransaction)}
            </Card>
          )}
        </Col>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Card title="Tổng số tiền">
              {formatNumberToMoney(data?.totalAmount)}
            </Card>
          )}
        </Col>
        <Col sm={8} xs={24} style={{ marginBottom: 20 }}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Card title="Tổng số khách hàng">
              {formatNumber(data?.totalCustomer)}
            </Card>
          )}
        </Col>
      </Row>
      {loading ? <Skeleton active /> : <AnalyticChart data={data?.chart} />}
    </>
  );
};

DataAnalytic.propTypes = {
  data: PropTypes.shape({
    chart: PropTypes.array,
    totalTransaction: PropTypes.number,
    totalAmount: PropTypes.number,
    totalCustomer: PropTypes.number,
  }),
  loading: PropTypes.bool,
};

export default DataAnalytic;
