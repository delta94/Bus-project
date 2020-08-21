import React from 'react';

import Field from './Field';

export default {
  title: 'UIKit/Field',
  component: Field,
};

const Template = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Key',
  value: 'Value',
};
