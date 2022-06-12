import React from 'react';
import styled from 'styled-components';
import { IModalInfo } from '../../types/modal';

const ImgDetail = ({ ...props }: IModalInfo) => {
  return (
    <DetailWrapper>
      <StatWrapper>
        <div>
          <h3>Views</h3>
          <span>{props.views}</span>
        </div>
        <div>
          <h3>Downloads</h3>
          <span>{props.downloads}</span>
        </div>
      </StatWrapper>
      {props.cameraMake && props.cameraModel && (
        <span>
          카메라: {props.cameraMake}, {props.cameraModel}
        </span>
      )}
      {props.focalLength && <span>초점거리: {props.focalLength}</span>}
      {props.aperture && <span>조리개: {props.aperture}</span>}
      {props.shutterSpeed && <span>셔터 속도: {props.shutterSpeed}</span>}
      {props.iso && <span>ISO: {props.iso}</span>}
      {props.dimensions && <span>크기: {props.dimensions}</span>}
    </DetailWrapper>
  );
};

const StatWrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  div {
    margin-right: 4rem;
    margin-bottom: 1rem;
    h3 {
      margin: 0;
      font-weight: normal;
    }
    span {
      font-weight: bold;
    }
  }
`;

const DetailWrapper = styled.section`
  padding: 1rem 0;
  text-align: left;
  span {
    display: block;
  }
`;

export default ImgDetail;
