// .storybook/preview.js
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/lib/GlobalStyle';
import theme from '../src/lib/GlobalStyle/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
