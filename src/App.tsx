
import React, {  } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { MainContent } from './components/MainContent';
import styledTheme from './styles/theme';
// import SearchBar from './components/SearchBar';


function App() {
  
  return (
    <ThemeProvider theme={styledTheme} >
      <Wrapper>
        <Header />
        <MainContent />
      </Wrapper>
    </ThemeProvider>
  );
}

const Loading = () => {
  return (
    <>이미지 준비중</>
  )
}

const Wrapper = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: stretch;
`

export default App;
