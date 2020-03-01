import React from "react";
import { css } from "styled-components";
import { useDispatch } from "react-redux";
import { Paragraph } from "../styled";
import Modal from "../Modal";
import Login from "../Login";
import favorite from "../../assets/favorite.svg";
import favoriteBordered from "../../assets/favorite-border.svg";
import comment from "../../assets/comment.svg";
import { ticketLike } from "../../actions/ticket";
import * as S from "./styled";

export interface ITicketFooterProps {
  likesCount?: number;
  comments: string[];
  likedByCurrentUser?: boolean;
  ticketId: string;
}

const loginStyles = css`
  min-width: 400px;
`;

const TicketFooter: React.FC<ITicketFooterProps> = props => {
  const { likesCount, comments, likedByCurrentUser, ticketId } = props;
  const [isOpenLogin, setIsOpenLogin] = React.useState(false);

  const dispatch = useDispatch();

  const isAuth = Boolean(window.localStorage.getItem("token"));

  const onLike = (event: any) => {
    event.preventDefault();
    if (isAuth) {
      dispatch(ticketLike({ ticketId }));
    } else {
      setIsOpenLogin(true);
    }
  };

  const closeModal = (event: any) => {
    event && event.preventDefault();
    setIsOpenLogin(false);
  };

  const onLoginClose = () => {
    setIsOpenLogin(false);
    window.location.reload();
  };

  return (
    <React.Fragment>
      <S.Wrapper>
        <S.Img
          src={likedByCurrentUser ? favorite : favoriteBordered}
          onClick={onLike}
        />
        <Paragraph withoutSpace>{likesCount || 0}</Paragraph>
        <img src={comment} />
        <Paragraph withoutSpace>{comments ? comments.length : 0}</Paragraph>
      </S.Wrapper>
      <Modal
        isOpen={isOpenLogin}
        toggleModal={closeModal}
        modalStyles={loginStyles}
      >
        <Login onClose={onLoginClose} />
      </Modal>
    </React.Fragment>
  );
};

export default TicketFooter;
