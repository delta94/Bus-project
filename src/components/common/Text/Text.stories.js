import React from 'react';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    p: { control: 'text' },
    px: { control: 'number' },
    py: { control: 'number' },
  },
};

const Template = (args) => <Text {...args}>Hello</Text>;

export const Default = Template.bind({});
Default.args = {
  color: '#f24',
};
