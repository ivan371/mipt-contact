import React from "react";
import * as S from "./styled";
import { Section } from "../styled";
import close from "../../assets/close.svg";

interface IModalProps {
  toggleModal: () => void;
  isOpen: boolean;
  modalStyles?: any;
}

const Modal: React.FC<IModalProps> = props => {
  const { children, toggleModal, isOpen, modalStyles } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <S.Wrapper onClick={() => toggleModal()}>
      <S.Inner
        onClick={event => event.stopPropagation()}
        modalStyles={modalStyles}
      >
        <S.Header onClick={() => toggleModal()}>
          <img src={close} />
        </S.Header>
        <Section>{children}</Section>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Modal;
