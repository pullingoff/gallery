import React from 'react';
import styled from 'styled-components';
import { invertColor } from '../apis/color';
import { IPhoto } from '../types';

// 컬러에 보색으로 글씨 보이게 하기!
const Photo = ({ ...props }: IPhoto) => {
  const imgUrl = props.urls.small || '';
  const author = props.user.name;
  const authorImg = props.user.profile_image.small;
  const authorPortFolio = props.user.portfolio_url;

  return (
    <>
      <Img alt={props.alt_description || ''} src={imgUrl} />
      <DetailWrapper>
        <Detail>
          <AuthorDetail
            href={authorPortFolio}
            target="_blank"
            rel="noreferrer"
            color={invertColor(props.color)}
          >
            <img src={authorImg} alt={author} />
            <br />
            <span>{author}</span>
          </AuthorDetail>
        </Detail>
      </DetailWrapper>
    </>
  );
};

const Img = styled.img`
  opacity: 1;
  transition: 0.5s ease;
  backface-visibility: hidden;
  margin: auto;
  max-height: inherit;
  max-width: ${({ theme }) => theme.photo.maxWidth};
`;

const DetailWrapper = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const Detail = styled.div`
  font-weight: bold;
  &:hover {
    // font-size: 1.5rem;
  }
`;

const AuthorDetail = styled.a`
  color: white;
  cursor: pointer;
  > span {
    font-size: 1.25rem;
    color: ${props => props.color};
  }
  > img {
    min-width: 2rem;
  }
`;

export default Photo;
