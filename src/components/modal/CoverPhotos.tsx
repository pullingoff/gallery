import React from 'react';
import styled from 'styled-components';
import { ICollection } from '../../types';

const CoverPhotos = (item: ICollection) => {
  const photos = item.preview_photos;
  const link = `https://unsplash.com/collections/${item.id}`;

  // console.log(photos);
  return (
    <CoverPhotoA
      style={{ display: 'block' }}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <Collage>
          <Left>
            <img
              src={photos[0].urls.regular}
              alt={`${item.title}'s thumbnail`}
            />
          </Left>
          <Right>
            {photos[1] && (
              <ThumbImg
                url={photos[1].urls.regular}
                title={`${item.title}'s thumbnail`}
              />
            )}
            {photos[2] && (
              <ThumbImg
                url={photos[2].urls.regular}
                title={`${item.title}'s thumbnail`}
              />
            )}
          </Right>
        </Collage>
      </div>
    </CoverPhotoA>
  );
};

const ThumbImg = ({ url, title }: { url: string; title: string }) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
};

const Left = styled.div`
  background: #f5f5f5;
  width: 70%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  width: 30%;
  div:first-child {
    margin-bottom: 2px;
  }
`;

const Collage = styled.div`
  border-radius: 6px;
  display: flex;
  height: 200px;
  overflow: hidden;
  perspective: 1px;
  transition: all 0.1s ease-in-out;
  width: 100%;
  div {
    position: relative;
    flex-grow: 1;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const CoverPhotoA = styled.a`
  display: block;
  img {
    -webkit-filter: brightness(100%);
  }
  &:hover {
    img {
      -webkit-filter: brightness(80%);
      -webkit-transition: all 0.2s ease;
      -moz-transition: all 0.2s ease;
      -o-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
  }
`;

export default CoverPhotos;
