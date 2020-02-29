import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { Section, Paragraph, Label } from "../styled";
import favorite from "../../assets/favorite.svg";
import comment from "../../assets/comment.svg";

export interface ITicketListItemProps {
  ticket: ITicket;
}

const TicketListItem: React.FC<ITicketListItemProps> = ({ ticket }) => {
  return (
    <Section>
      <Link to={`/${ticket.id}`}>
        <S.Inner>
          <S.Main>
            <S.Title>{ticket.title}</S.Title>
            <Paragraph>{ticket.category}</Paragraph>
            <Paragraph>{ticket.description}</Paragraph>
          </S.Main>
          <S.Main>
            <Label>
              <Paragraph>{ticket.status}</Paragraph>
            </Label>
            <div>
              <Paragraph>Автор: {ticket.author.name}</Paragraph>
              {ticket.assignee && (
                <Paragraph>Исполнитель: {ticket.assignee.name}</Paragraph>
              )}
            </div>
          </S.Main>
        </S.Inner>
        <S.Footer>
          <img src={favorite} />
          <Paragraph withoutSpace>{ticket.likesCount || 0}</Paragraph>
          <img src={comment} />
          <Paragraph withoutSpace>{ticket.comments.length}</Paragraph>
        </S.Footer>
      </Link>
    </Section>
  );
};
export default TicketListItem;
