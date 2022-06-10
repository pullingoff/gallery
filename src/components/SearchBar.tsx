import React, { ChangeEvent } from "react";
import { useState } from "react";
import styled from "styled-components";
import { getSearchImages } from "../apis";

const SearchBar = ({...props}) => {
    const [searchWord, setSearchWord] = useState<string>('')

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchWord(e.target.value)
      }

    const handleSubmit = () => {
        // e.preventDefault();
        getSearchImages(searchWord).then(data => {
            // 검색한 경우엔 total, total_pages를 담아 한 겹 더 쌓여서 응답이 옴
            const searchResultCnt = data.total;
            const imgList = data.results;
            
            props.setImageList(imgList);
        })
    }
    
    return (
    <Wrapper >
        <TextInput type='text' 
                    placeholder='검색하세요'
                    maxLength={30}
                    value={searchWord}
                    onChange={handleChange}
        />
        <button onClick={handleSubmit} >
            검색
        </button>
    </Wrapper>
    )
}

const Wrapper = styled.section`
display: flex;
flex-flow: row nowrap;
`

const TextInput = styled.input`
font-size: 1.5rem;
margin: 1rem 2rem;
`

export default SearchBar;