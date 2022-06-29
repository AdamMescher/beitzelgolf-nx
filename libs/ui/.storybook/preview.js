// .storybook/preview.js
import GlobalStyle from '../src/lib/GlobalStyle';

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyle />
      <Story />
    </div>
  ),
];
