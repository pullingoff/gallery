import React from 'react';
import styled from 'styled-components';
import { ICollection } from '../../types';
import CoverPhotos from './CoverPhotos';

// 컬렉션 모음
const Collections = ({ collections }: { collections: ICollection[] }) => {
  return (
    <div style={{ textAlign: 'left' }}>
      <h3>Related Collections</h3>
      <CollectionWrapper>
        {collections.map(item => (
          <div key={item.id} style={{ margin: '1rem 1rem 3rem 0' }}>
            <CoverPhotos {...item} />
            <CollectionDetail {...item} />
          </div>
        ))}
      </CollectionWrapper>
    </div>
  );
};

// 한 컬렉션의 텍스트 정보
const CollectionDetail = (item: ICollection) => {
  const tagList = item.tags.map(a => a.title);
  return (
    <>
      <h4 style={{ margin: '1rem 0 0.5rem' }}>{item.title}</h4>
      <span style={{ color: 'grey' }}>
        {item.total_photos} photos · Curated by {`${item.user.name}`}
      </span>
      <TagSection>
        {tagList?.map(tag => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </TagSection>
    </>
  );
};

const TagSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const StyledTag = styled.span`
  background: lightgrey;
  color: grey;
  margin: 0 0.25rem 0.5rem;
  border-radius: 3px;
  padding: 0.2rem 0.5rem;
`;

const CollectionWrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
`;

export default Collections;
