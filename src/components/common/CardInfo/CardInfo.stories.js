import React from 'react';
import { storiesOf } from '@storybook/react';

import CardInfo from './CardInfo';

storiesOf('CardInfo', module).add('Default', () => (
  <div style={{ padding: 20 }}>
    <CardInfo title="Company" />
  </div>
));
