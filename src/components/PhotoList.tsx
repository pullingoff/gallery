import React, { lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import { IImageListData } from '../types';
import Photo from './Photo';

const LazyModal = lazy(() => import('./modal/Modal'));

const PhotoList = (imageInfo: IImageListData) => {
  // 모달이 열렸는지 여부를 불린으로 체크하는 대신 modalImgId 값이 있으면 모달이 열린 것으로 간주
  const [modalImgId, setModalImgId] = useState<string>('');

  const clickHandler = (imgId: string) => {
    setModalImgId(imgId);
  };

  return (
    <StyledUl>
      {imageInfo?.results?.map(img => (
        <Wrapper
          key={img.id}
          color={img.color}
          onClick={() => clickHandler(img.id)}
        >
          <Photo {...img} />
        </Wrapper>
      ))}
      {imageInfo.results.length < 1 && <NoResult />}
      <Suspense fallback={null}>
        {modalImgId.length > 0 ? <LazyModal modalImgId={modalImgId} /> : null}
      </Suspense>
    </StyledUl>
  );
};

const NoResult = () => {
  return <div style={{ minHeight: '50vh' }}>검색 결과가 없습니다.</div>;
};

const Wrapper = styled.li`
  max-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  cursor: pointer;
  &:hover {
    > img {
      opacity: 0;
    }
    > div {
      opacity: 1;
    }
  }
  position: relative; // 오버레이 위함
`;

const StyledUl = styled.ul`
  margin: 30px auto;
  display: grid;
  grid-gap: 1rem;
  list-style: none;
  text-align: center;
  padding: 0;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ theme }) => theme.device.xs}, auto)
  );
  li {
    z-index: 99;
  }
`;

export default PhotoList;
