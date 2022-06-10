import React from 'react';
import styled from 'styled-components';
import { IPhoto } from '../types';
import Photo from './Photo';

const PhotoList = ({list}: {
    list: IPhoto[]
}) => {
    console.log(list)

    return (
        <StyledUl>
            {list?.map((img) => (
                <Photo key={img.id} {...img} />
            ))
            }
            {list.length === 0 &&
                <h2>검색어와 관련된 사진이 없습니다.</h2>
            }
        </StyledUl>
    )
}


const StyledUl = styled.ul`
margin: 30px auto;
display: grid;
grid-gap: 1rem;
list-style: none;
grid-template-columns: repeat(3, 1fr);
text-align: center;
`

export default PhotoList;