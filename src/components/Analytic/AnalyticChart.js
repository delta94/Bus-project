import React from 'react';
import styled from 'styled-components';
import { Card, DatePicker, Tooltip } from 'antd';
import moment from 'moment';
import useRouter from 'hooks/useRouter';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  CartesianGrid,
  YAxis,
  Area,
} from 'recharts';
import { compactNumber } from 'utils/textUtils';

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 20px 20px 10px 20px;
  }
`;

const AnalyticChart = () => {
  const { query } = useRouter();

  return (
    <StyledCard style={{ height: 303 }}>
      <div className="flex justify-between">
        <h2 className="t-600-14px-17px text-header-table">Biến động số dư</h2>
        <DatePicker
          value={moment(query.startTime, 'DD-MM-YYYY')}
          format="DD-MM-YYYY"
          style={{
            width: 200,
            height: 48,
            background: '#FAFAFA',
            borderRadius: 10,
            border: 'none',
          }}
          // onChange={changeDate}
        />
      </div>
      <div
        style={{ width: '100%', height: 225, padding: '20px 23px 0 0' }}
        className="t-10px-12px"
      >
        <ResponsiveContainer>
          <AreaChart data={[]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="completedAt"
              tickSize={0}
              tickMargin={10}
              // tickFormatter={(data) => formatDateUnix(data, 'hh:mm')}
            />
            <YAxis
              tickSize={0}
              tickMargin={10}
              tickFormatter={(data) => compactNumber(data)}
            />
            <Tooltip
              // labelFormatter={(value) => formatDateUnix(value, 'hh:mm')}
              formatter={(value) => [compactNumber(value), 'Tổng']}
            />
            <Area
              type="step"
              step
              dataKey="currentAmount"
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

AnalyticChart.propTypes = {};

export default AnalyticChart;
