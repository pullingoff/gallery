import React, { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getImages } from '../apis';
import { useIntersectionObserver } from '../apis/infiniteScroll';
import { ToTopBtn } from '../assets/ToTopBtn';
// import { ToTopBtn } from '../assets/toTopBtn';
import { SearchBarForm, SubmitBtn, TextInput } from '../styles/searchBar';
import { IImageListData } from '../types';
import PhotoList from './PhotoList';

export const MAX_SCROLL_IMG_CNT = 500; // 50개 이상의 이미지를 띄우면 경고

export const MainContentScroll = () => {
  const [currPage, setCurrPage] = useState<number>(1); // 아래부분에서도 초기화.
  const [searchWord, setSearchWord] = useState<string>('');
  // 이미지 리스트와 모든 페이지네이션 정보 포함
  const [imageInfo, setImageInfo] = useState<IImageListData>({
    totalImgCnt: MAX_SCROLL_IMG_CNT,
    eachPageImgCnt: 10,
    results: [],
  });

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    const { totalImgCnt, eachPageImgCnt } = imageInfo;

    if (isIntersecting) {
      if (totalImgCnt < eachPageImgCnt * (currPage - 1)) {
        return;
      }
      getImages(searchWord, currPage + 1).then(resp => {
        if (resp) {
          setImageInfo(({ results: prevResults }) => ({
            ...imageInfo,
            totalImgCnt: resp.totalImgCnt,
            results: [...prevResults, ...resp.results],
          }));

          setCurrPage(currPage + 1);
        }
      });
    }
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // currPage 초기화
    setCurrPage(1);
    getImages(searchWord).then(resp => {
      if (resp) {
        setImageInfo(resp);
      }
    });
  };

  // scrollToTop 버튼 클릭시 부드럽게 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainWrapper>
      <SearchBarForm onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="검색하세요"
          maxLength={30}
          value={searchWord}
          onChange={handleChange}
        />
        <SubmitBtn type="submit" value="검색" />
      </SearchBarForm>
      <ScrollToTopBtn onClick={scrollToTop}>
        <ToTopBtn />
      </ScrollToTopBtn>
      <PhotoList {...imageInfo} />
      <div ref={setTarget} />
    </MainWrapper>
  );
};

const ScrollToTopBtn = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 50px;
  z-index: 100;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const MainWrapper = styled.main`
  // grid item 갯수를 최대 3개로 유지하기 위함
  max-width: calc(${({ theme }) => theme.device.xs} * 3.8);
  align-self: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.device.sm}) {
    padding: 2rem 3rem;
  }
`;
