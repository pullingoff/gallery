import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getImages } from '../apis/photo';
import { IPhoto } from '../types';
import Photo from './Photo';

const PhotoList = () => {
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
        <StyledUl>
            {imageList?.map((img) => (
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