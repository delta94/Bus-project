import React from 'react';

import AlertError from './AlertError';

export default {
  title: 'AlertError',
  component: AlertError,
};

const Template = (args) => <AlertError {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Lỗi! Truy cập thất bại',
};
