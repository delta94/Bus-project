import { Card, Row } from 'antd';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import styled from 'styled-components';
import { compactNumber, formatDate } from '@/utils/textUtils';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 20px 20px 10px 20px;
  }
`;

const AnalyticChart = ({ data }) => {
  return (
    <StyledCard style={{ height: 400 }}>
      <Row justify="space-between">
        <h2 className="t-600-14px-17px text-header-table">Lịch sử giao dịch</h2>
      </Row>
      <div
        style={{ width: '100%', height: 300, padding: '20px 23px 0 0' }}
        className="t-10px-12px"
      >
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickSize={0}
              tickMargin={10}
              tickFormatter={(data) => formatDate(data, 'DD/MM/YYYY')}
            />
            <YAxis tickSize={0} dataKey="amount" />
            <Tooltip
              labelFormatter={(value) => formatDate(value, 'DD/MM/YYYY')}
              formatter={(value) => [compactNumber(+value), 'Tổng']}
            />
            <Area
              type="step"
              step
              dataKey="amount"
              stroke="#3478F6"
              fill="rgba(52, 120, 246, 0.2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </StyledCard>
  );
};

AnalyticChart.propTypes = {
  data: PropTypes.array,
};

export default AnalyticChart;
