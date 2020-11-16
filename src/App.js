import React from 'react';
import { CounterContextProvider } from './context/CounterContextProvider';
import { Home } from './pages/Home';
import Theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <CounterContextProvider>
      <Theme>
        <GlobalStyle />
        <Home />
      </Theme>
    </CounterContextProvider>
  );
}

export default App;
