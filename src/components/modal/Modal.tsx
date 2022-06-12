import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getImage } from '../../apis';
import {
  AuthorDetail,
  Background,
  CloseBtn,
  Header,
  ImgWrapper,
  Main,
  ModalWrapper,
} from '../../styles/modal';
import { IModalInfo } from '../../types/modal';
import Collections from './Collection';
import ImgDetail from './ImgDetail';

const Modal = ({ modalImgId }: { modalImgId: string }) => {
  const [modalInfo, setModalInfo] = useState<IModalInfo>({});

  useEffect(() => {
    if (modalImgId) {
      getImage(modalImgId).then(resp => {
        if (resp) setModalInfo(resp);
      });
      // 모달 열릴 때 백그라운드 스크롤 막음
      document.body.style.overflow = 'hidden';
    }
  }, [modalImgId]);

  const closeModal = () => {
    setModalInfo({}); // 모달 정보 초기화
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
            <Main>
              <ImgWrapper>
                <img
                  src={modalInfo.imgUrl.regular}
                  alt={modalInfo.description}
                  srcSet={`${modalInfo.imgUrl.small} 419w,
                ${modalInfo.imgUrl.regular} 780w,
                ${modalInfo.imgUrl.full} 1030w,
                `}
                />
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

export default Modal;
