import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoginForm from './LoginForm';

storiesOf('Login Form', module).add('Default', () => (
  <div style={{ padding: 20 }}>
    <LoginForm loading={false} handleSubmit={action()} />
  </div>
));
