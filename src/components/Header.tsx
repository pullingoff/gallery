import React from "react";
import styled from "styled-components";

const Header = () => {

    const refreshPage = () => {
        window.location.reload();
      }

    return (
        <StyledHeader onClick={refreshPage}>
            PHOTOTYPE
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
font-weight: bold;
font-size: 3rem;
padding: 2rem;
cursor: pointer;

`

export default Header;