import React from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import * as S from "./styled";
import { Button } from "../styled";
import Modal from "../Modal";
import TicketForm from "../TicketForm";
import Login from "../Login";
import mipt from "../../assets/mipt.png";

const loginStyles = css`
  min-width: 400px;
`;

const Header: React.FC = () => {
  const [isOpenTicketForm, setIsOpenTicketForm] = React.useState(false);
  const [isOpenLogin, setIsOpenLogin] = React.useState(false);

  return (
    <S.Wrapper>
      <Link to="/">
        <img src={mipt} height={32} />
      </Link>
      <Button onClick={() => setIsOpenTicketForm(true)}>
        Сообщить о проблеме
      </Button>
      <Button onClick={() => setIsOpenLogin(true)}>Войти</Button>
      <Modal
        isOpen={isOpenTicketForm}
        toggleModal={() => setIsOpenTicketForm(false)}
      >
        <TicketForm />
      </Modal>
      <Modal
        isOpen={isOpenLogin}
        toggleModal={() => setIsOpenLogin(false)}
        modalStyles={loginStyles}
      >
        <Login />
      </Modal>
    </S.Wrapper>
  );
};

export default Header;
