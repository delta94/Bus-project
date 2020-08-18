import React from 'react';

import AnalyticChart from './AnalyticChart';

export default {
  title: 'Chart/AnalyticChart',
  component: AnalyticChart,
  argTypes: {},
};

const Template = (args) => <AnalyticChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [],
};
