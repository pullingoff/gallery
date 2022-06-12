import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return <StyledHeader onClick={refreshPage}>📸 GALLERY</StyledHeader>;
};

const StyledHeader = styled.header`
  font-weight: bold;
  font-size: 3rem;
  padding: 2rem;
  cursor: pointer;
  text-align: center;
  background: ${({ theme }) => theme.colors.highlight};
  color: white;
  &:hover {
    background: initial;
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export default Header;
