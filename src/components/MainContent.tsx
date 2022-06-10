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
        <>
        <Wrapper onSubmit={handleSubmit}>
            <TextInput type='text' 
                        placeholder='검색하세요'
                        maxLength={30}
                        value={searchWord}
                        onChange={handleChange}
                        />
            <SubmitBtn type='submit' />
        </Wrapper>
        <PhotoList/>
        </>
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

const Wrapper = styled.form`
display: flex;
flex-flow: row nowrap;
align-items: center;
`

const TextInput = styled.input`
font-size: 1.5rem;
margin: 1rem 2rem;
`

const SubmitBtn = styled.input`
border: none;
font-size: 1.5rem;
padding: 0.5rem 1rem;
cursor: pointer;
&:hover {
    background: salmon;
}
`

// export default SearchBar;