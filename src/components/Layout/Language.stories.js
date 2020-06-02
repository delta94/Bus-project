import React from 'react';
import { storiesOf } from '@storybook/react';

import Language from './Language';

storiesOf('Language', module).add('Default', () => (
  <div style={{ padding: 20 }}>
    <Language />
  </div>
));
