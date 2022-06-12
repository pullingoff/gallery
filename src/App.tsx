import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { MainContentScroll } from './components/MainContentScroll';
import styledTheme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <Wrapper>
        <Header />
        <MainContentScroll />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
`;

export default App;
