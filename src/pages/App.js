import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/global-style';
import { Home } from './Home';
import { theme } from '../theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App
