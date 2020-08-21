import React from 'react';

import Box from './Box';

export default {
  title: 'UIKit/Box',
  component: Box,
  argTypes: {
    bg: { control: 'color' },
    color: { control: 'color' },
    p: { control: 'text' },
    px: { control: 'number' },
    py: { control: 'number' },
    display: { control: 'text' },
    maxWidth: { control: 'number' },
    size: { control: 'number' },
    alignItems: { control: 'text' },
    justifyContent: { control: 'text' },
  },
};

const Template = (args) => (
  <Box {...args}>
    <div> test1 </div>
    <div> test2 </div>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  color: '#fff',
  bg: 'tomato',
};
