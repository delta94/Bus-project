import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { compactNumber } from '@/utils/textUtils';

const MonthChart = () => {
  const data = [
    {
      name: 'JAN',
      uv: 100000,
      pv: 240000,
    },
    {
      name: 'FEB',
      uv: 300000,
      pv: 139800,
    },
    {
      name: 'MAR',
      uv: 200000,
      pv: 980000,
    },
    {
      name: 'APR',
      uv: 278000,
      pv: 390800,
    },
    {
      name: 'MAY',
      uv: 189000,
      pv: 480000,
    },
    {
      name: 'JUN',
      uv: 239000,
      pv: 380000,
    },
    {
      name: 'JUL',
      uv: 349000,
      pv: 430000,
    },
    {
      name: 'AUG',
      uv: 349000,
      pv: 430000,
    },
    {
      name: 'SEP',
      uv: 349000,
      pv: 430000,
    },
    {
      name: 'OCT',
      uv: 349000,
      pv: 430000,
    },
    {
      name: 'NOV',
      uv: 349000,
      pv: 430000,
    },
    {
      name: 'DEC',
      uv: 349000,
      pv: 430000,
    },
  ];
  return (
    <ResponsiveContainer height={470}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F48282" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F48282" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#096DD9" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#096DD9" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(data) => compactNumber(data)} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#F48282"
          name="Chi phí"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          name="Doanh thu"
          stroke="#096DD9"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

MonthChart.propTypes = {};

export default MonthChart;
