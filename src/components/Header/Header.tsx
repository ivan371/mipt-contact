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

  const onLoginClose = () => {
    setIsOpenLogin(false);
    window.location.reload();
  };

  const isAuth = Boolean(window.localStorage.getItem("token"));

  const onLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const onTicketFormOpen = () => {
    if (isAuth) {
      setIsOpenTicketForm(true);
    } else {
      setIsOpenLogin(true);
    }
  };

  return (
    <S.Wrapper>
      <Link to="/">
        <img src={mipt} height={32} />
      </Link>
      <Button onClick={onTicketFormOpen}>Сообщить о проблеме</Button>
      {!isAuth && <Button onClick={() => setIsOpenLogin(true)}>Войти</Button>}
      {isAuth && <Button onClick={onLogout}>Выйти</Button>}
      <Modal
        isOpen={isOpenTicketForm}
        toggleModal={() => setIsOpenTicketForm(false)}
      >
        <TicketForm onClose={() => setIsOpenTicketForm(false)} />
      </Modal>
      <Modal
        isOpen={isOpenLogin}
        toggleModal={() => setIsOpenLogin(false)}
        modalStyles={loginStyles}
      >
        <Login onClose={onLoginClose} />
      </Modal>
    </S.Wrapper>
  );
};

export default Header;
