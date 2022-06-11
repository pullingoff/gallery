import React, { ChangeEvent, useEffect } from "react";
import { FormEvent } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getImages, getSearchImages } from "../apis";
import { IPhoto } from "../types";
import Photo from "./Photo";

export const MainContent = ({...props}) => {
    const [searchWord, setSearchWord] = useState<string>('');
    const [imageList, setImageList] = useState<IPhoto[]>();


  useEffect(()=> {
        let isMounted = true;

        getImages().then(data => {
            if (isMounted) {
                setImageList(data);
                //setPage(page+1) 
            }
        })
        return () => {isMounted = false};
    }, []);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchWord(e.target.value)
      }

    // const handleSubmit = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        getSearchImages(searchWord).then(data => {
            // 검색한 경우엔 total, total_pages를 담아 한 겹 더 쌓여서 응답이 옴
            
            const {total: searchResultCnt, results: imgList} = data;
            
            setImageList(imgList);
        })
    }

    const PhotoList = () => {
        
        return (
            <StyledUl>
                {imageList?.map((img) => (
                    <Photo key={img.id} {...img} />
                ))}
            </StyledUl>
        )
    }
    
    return (
        <MainWrapper>
            <SearchBarForm onSubmit={handleSubmit}>
                <TextInput type='text' 
                            placeholder='검색하세요'
                            maxLength={30}
                            value={searchWord}
                            onChange={handleChange}
                            />
                <SubmitBtn type='submit' value='검색' />
            </SearchBarForm>
            <PhotoList/>
        </MainWrapper>
    )
}

const MainWrapper = styled.main`
padding: 5rem;
`

const StyledUl = styled.ul`
margin: 30px auto;
display: grid;
grid-gap: 1rem;
list-style: none;
text-align: center;
padding: 0;
grid-template-columns: repeat(auto-fit, minmax(${({theme}) => theme.photo.maxWidth}, auto));
`

const SearchBarForm = styled.form`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
`

const TextInput = styled.input`
width: 90%;
border: 2px solid ${({theme}) => theme.colors.highlight};
padding: 1rem;
font-size: 1.5rem;
margin: 1rem 2rem;
`

const SubmitBtn = styled.input`
width: 10%;
border: none;
font-size: 1.5rem;
font-weight: bold;
padding: 1rem;
cursor: pointer;
color: white;
background-color: ${({theme}) => theme.colors.highlight};
&:hover {
    background-color: initial;
    color: ${({theme}) => theme.colors.highlight};
    border: 2px solid ${({theme}) => theme.colors.highlight};
}
`