import React from 'react';
import { storiesOf } from '@storybook/react';
import RestInput from './RestInput';

storiesOf('Rest Input', module).add('Default', () => (
  <div style={{ padding: 20 }}>
    <RestInput fieldName="username" placeholder="Tên người dùng" />
  </div>
));
