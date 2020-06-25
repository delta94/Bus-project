import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

const MonthChart = () => {
  const data = [
    {
      name: 'JAN',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUN',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'AUG',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'SEP',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'OCT',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'NOV',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'DEC',
      uv: 3490,
      pv: 4300,
      amt: 2100,
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
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#F48282"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
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
