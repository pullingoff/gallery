import React from "react";
import styled from "styled-components";

const SearchBar = () => {
    return (
    <Wrapper>
        <input type='text' placeholder='검색하세요' />
        <input type='submit' />
    </Wrapper>
    )
}

const Wrapper = styled.form`
display: flex;
flex-flow: row nowrap;
`

export default SearchBar;