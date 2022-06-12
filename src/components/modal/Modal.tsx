import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { getImage } from '../../apis';
import { IModalInfo } from '../../types/modal';
import Collections from './Collection';
import ImgDetail from './ImgDetail';

const Modal = ({ modalImgId }: { modalImgId: string }) => {
  const [modalInfo, setModalInfo] = useState<IModalInfo>({});

  useEffect(() => {
    if (modalImgId) {
      getImage(modalImgId).then(resp => {
        if (resp) {
          setModalInfo(resp);
        }
      });
      document.body.style.overflow = 'hidden';
    }
  }, [modalImgId]);

  const closeModal = () => {
    setModalInfo({});
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {modalImgId.length > 0 && modalInfo.imgUrl ? (
        <Background>
          <ModalWrapper>
            <Header>
              <AuthorDetail>
                <h3>{modalInfo.author}</h3>
                <p>@{modalInfo.username}</p>
              </AuthorDetail>
              <CloseBtn onClick={closeModal}>X</CloseBtn>
            </Header>
            <Main style={{ overflowY: 'scroll' }}>
              <ImgWrapper>
                <img src={modalInfo.imgUrl} alt="" />
              </ImgWrapper>
              <ImgDetail {...modalInfo} />
              {modalInfo.collections && (
                <Collections collections={modalInfo.collections} />
              )}
            </Main>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

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
  padding: 1rem;
`;

const AuthorDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  > * {
    margin: 2px 0;
  }
`;

const ModalWrapper = styled.div`
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
`;

const Main = styled.main`
  overflow-y: scroll;
  max-height: 80vh;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  height: auto;
  > img {
    max-height: 70vh;
    width: 100%;
  }
`;

export default Modal;
