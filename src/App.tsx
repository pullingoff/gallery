
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getImages } from './apis';
import './App.scss';
import Header from './components/Header';
import PhotoList from './components/PhotoList';
import SearchBar from './components/SearchBar';
import { IPhoto } from './types';


function App() {
  const [imageList, setImageList] = useState<IPhoto[]>();
    
  useEffect(()=> {
      let isMounted = true;

      getImages().then(data => {
          if (isMounted) {
              setImageList(data);
          }
      })
      return () => {isMounted = false};
  }, []);

  
  return (
    <Wrapper>
      <Header />
      <SearchBar setImageList={setImageList} />
      {imageList &&
         <PhotoList list={imageList} /> 
      }
      {!imageList &&
        <Loading/>
      }
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
