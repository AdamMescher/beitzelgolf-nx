// .storybook/preview.js

import React from 'react';
import GlobalStyle from '../src/lib/GlobalStyle';

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyle />
      <Story />
    </div>
  ),
];
