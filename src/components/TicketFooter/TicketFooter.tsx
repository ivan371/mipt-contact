import React from "react";
import { useDispatch } from "react-redux";
import { Paragraph } from "../styled";
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

const TicketFooter: React.FC<ITicketFooterProps> = props => {
  const { likesCount, comments, likedByCurrentUser, ticketId } = props;

  const dispatch = useDispatch();

  const onLike = (event: any) => {
    event.preventDefault();
    dispatch(ticketLike({ ticketId }));
  };

  return (
    <S.Wrapper>
      <S.Img
        src={likedByCurrentUser ? favorite : favoriteBordered}
        onClick={onLike}
      />
      <Paragraph withoutSpace>{likesCount || 0}</Paragraph>
      <img src={comment} />
      <Paragraph withoutSpace>{comments ? comments.length : 0}</Paragraph>
    </S.Wrapper>
  );
};

export default TicketFooter;
