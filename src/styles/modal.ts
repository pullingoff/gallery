import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const CloseBtn = styled.button`
  border: none;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  background: white;
  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const AuthorDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  > * {
    margin: 2px 0;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 10px;
  top: 5%;
  left: 10%;
  width: 80%;
  z-index: 101;
  padding: 1rem 2rem;
  overflow-y: scroll;
  // mobile mode
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    top: 0;
    left: 0;
    width: initial;
    border-radius: initial;
  }
`;

export const Main = styled.main`
  //   overflow-y: scroll;
  max-height: 80vh;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  height: auto;
  > img {
    max-height: 70vh;
    width: 100%;
  }
`;
