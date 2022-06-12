import React from 'react';
import styled from 'styled-components';
import { IModalInfo } from '../../types/modal';

const ModalHeader = (closeModal: MouseEvent, { ...props }: IModalInfo) => {
  return (
    <Header>
      <AuthorDetail>
        <h3>{props.author}</h3>
        <p>@{props.username}</p>
      </AuthorDetail>
      <CloseBtn onClick={() => closeModal}>X</CloseBtn>
    </Header>
  );
};

const CloseBtn = styled.button`
  border: none;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  background: white;
  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const AuthorDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  > * {
    margin: 2px 0;
  }
`;

export default ModalHeader;
