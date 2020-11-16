import React from 'react';
import { ThemeProvider } from 'styled-components';
export const theme = {
  colors: {
    hotpink: '#FF69B4',
    rebeccapurple: '#663399',
    white: '#ffffff',
    black: '#000000',
  },
};
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
