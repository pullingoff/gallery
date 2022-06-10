
import React from 'react';
import styled from 'styled-components';
import './App.scss';
import Header from './components/Header';
import PhotoList from './components/PhotoList';
import SearchBar from './components/SearchBar';


function App() {

  
  return (
    <Wrapper>
      <Header />
      <SearchBar />
      <PhotoList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: center;
`

export default App;
