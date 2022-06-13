import React from 'react';
import styled from 'styled-components';
import { invertColor } from '../utils/color';
import { IPhoto } from '../types';

// 컬러에 보색으로 글씨 보이게 하기!
const Photo = ({ ...props }: IPhoto) => {
  const author = props.user.name;
  return (
    <>
      <Img alt={props.alt_description || ''} src={props.urls.small || ''} />
      <DetailWrapper>
        <Detail>
          <AuthorDetail
            href={props.user.portfolio_url}
            target="_blank"
            rel="noreferrer"
            color={invertColor(props.color)}
          >
            <img src={props.user.profile_image.small || ''} alt={author} />
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
  transition: transform 250ms;
  &:hover {
    transform: translateY(-10px);
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
