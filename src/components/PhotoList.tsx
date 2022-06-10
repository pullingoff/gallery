import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getImages } from '../apis';
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
        </StyledUl>
    )
}

const StyledUl = styled.ul`
margin: 30px auto;
display: grid;
grid-gap: 1rem;
list-style: none;
grid-template-columns: repeat(3, 1fr);
`

export default PhotoList;