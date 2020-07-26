/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';
import { Card } from 'antd';

const data = [
  { name: 'Nam', value: 400 },
  { name: 'Nữ', value: 400 },
];

const COLORS = ['#3478f6', '#24c6C8'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#000000"
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill="#000000" stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#717791"
        fontSize={10}
      >
        {payload.name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#717791"
        fontSize={11}
      >
        {`${payload.payload.value}`}
      </text>
    </g>
  );
};

const GenderChart = () => {
  return (
    <Card title="Giới tính">
      <ResponsiveContainer height={470}>
        <PieChart width={500} height={275}>
          <Pie
            data={data}
            innerRadius={120}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
            label={renderActiveShape}
          >
            {data.map((entry, index) => (
              <Cell key={String(index)} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

GenderChart.propTypes = {};

export default GenderChart;
