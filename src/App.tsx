
import React, {  } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { MainContent } from './components/MainContent';
// import SearchBar from './components/SearchBar';


function App() {
  
  return (
    <Wrapper>
      <Header />
      <MainContent />
    </Wrapper>
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
align-items: center;
`

export default App;
