import React from 'react';

import TextTruncate from './TextTruncate';

export default {
  title: 'UIKit/TextTruncate',
  component: Text,
  argTypes: {
    element: { control: 'text' },
    line: { control: 'number' },
    text: { control: 'text' },
  },
};

const Template = (args) => (
  <div style={{ width: 200 }}>
    <TextTruncate {...args}>Hello</TextTruncate>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  element: 'p',
  line: 2,
  text: 'Con gặp cô Chào Mào, chào chú. Chú gặp cô chào Mào chào con.',
};
