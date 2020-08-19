import { Card, Col, Row, Skeleton } from 'antd';
import FilterTabPane from 'components/common/FilterTabPane';
import React from 'react';
import { formatNumber, formatNumberToMoney } from 'utils/textUtils';
import DateFilter from 'components/common/DateFilter';
import PropTypes from 'prop-types';
import AnalyticChart from 'components/Chart/AnalyticChart';

const DataAnalytic = ({ data }) => {
  return (
    <>
      <Row style={{ marginBottom: 20 }} justify="space-between">
        <FilterTabPane />
        <DateFilter />
      </Row>
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
      {data.loading === 'analytic' ? (
        <Skeleton active />
      ) : (
        <AnalyticChart data={data.analytic.chart} />
      )}
    </>
  );
};

DataAnalytic.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.string,
    analytic: PropTypes.shape({
      chart: PropTypes.array,
      totalTransaction: PropTypes.number,
      totalAmount: PropTypes.number,
      totalCustomers: PropTypes.number,
    }),
  }),
};

export default DataAnalytic;
