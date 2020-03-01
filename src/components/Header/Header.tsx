import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { css } from "styled-components";
import * as S from "./styled";
import { Button, Paragraph } from "../styled";
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
  const user = useSelector<IState, IAuthUser | undefined>(
    state => state.user.user
  );

  const isAdmin = user ? user.role === "moderator" : false;

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
    <React.Fragment>
      <S.Wrapper>
        <Link to="/">
          <img src={mipt} height={32} />
        </Link>
        {!isAdmin && (
          <Button onClick={onTicketFormOpen}>Сообщить о проблеме</Button>
        )}
        {isAuth && (
          <Link to="/my">
            <Button>Мои обращения</Button>
          </Link>
        )}
        {!isAuth && <Button onClick={() => setIsOpenLogin(true)}>Войти</Button>}
        {isAuth && (
          <S.User>
            {user && user.name && <Paragraph>{user.name}</Paragraph>}
            {<Button onClick={onLogout}>Выйти</Button>}
          </S.User>
        )}
      </S.Wrapper>
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
    </React.Fragment>
  );
};

export default Header;
