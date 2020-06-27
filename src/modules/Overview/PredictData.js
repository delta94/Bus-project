import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';
import { formatDate, formatNumber } from 'utils/textUtils';
import { Card, Skeleton } from 'antd';
import { getPredict } from '../Transactions/slice';

const PredictData = () => {
  const { predict: data, loading } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPredict());
  }, [dispatch]);

  return loading !== 'predict' ? (
    <Card
      title="Dự đoán dữ liệu"
      extra={`Dữ liệu dự đoán: ${formatNumber(data[data.length - 1]?.predict)}`}
    >
      <ResponsiveContainer height={470}>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickMargin={10}
            tickFormatter={(data) => formatDate(data, 'DD/MM/YYYY')}
          />
          <YAxis tickMargin={10} tickFormatter={(data) => formatNumber(data)} />
          <Tooltip
            labelFormatter={(value) => formatDate(value, 'DD/MM/YYYY')}
            formatter={(value, name) => {
              if (name === 'predict') return [formatNumber(+value), 'Predict'];
              if (name === 'Series') return [formatNumber(+value), 'Series'];
              return [formatNumber(+value), 'SMA'];
            }}
          />
          <Legend />
          <Line
            strokeWidth={3}
            dot={false}
            type="monotone"
            name="Series"
            dataKey="amount"
            stroke="#096DD9"
          />
          <Line
            strokeWidth={3}
            dot={false}
            type="monotone"
            name="SMA"
            dataKey="sma"
            stroke="#FF8C00"
          />
          <Line
            strokeWidth={3}
            type="monotone"
            name="Predict"
            dataKey="predict"
            stroke="#F48282"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  ) : (
    <Skeleton active />
  );
};

PredictData.propTypes = {};

export default PredictData;
