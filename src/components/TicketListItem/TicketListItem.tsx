import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import { Section, Paragraph, Title } from "../styled";
import TicketFooter from "../TicketFooter";
import { statuses } from "../../constants";

export interface ITicketListItemProps {
  ticket: ITicket;
}

const TicketListItem: React.FC<ITicketListItemProps> = ({ ticket }) => {
  const {
    id,
    title,
    category,
    description,
    status,
    author,
    assignee,
    likesCount,
    likedByCurrentUser,
    creationTime,
    comments = []
  } = ticket;

  const statusLabel = statuses[status];

  return (
    <Section>
      <Link to={`/${id}`}>
        <Title>{title}</Title>
        <S.Inner>
          <S.Main>
            {statusLabel && (
              <S.ActionLabel>
                <Paragraph>{statusLabel}</Paragraph>
              </S.ActionLabel>
            )}
            <Paragraph>{category}</Paragraph>
            <Paragraph>{description}</Paragraph>
          </S.Main>
          <S.Main>
            <div>
              {author && <Paragraph>Автор: {author.name}</Paragraph>}
              {assignee && <Paragraph>Исполнитель: {assignee.name}</Paragraph>}
            </div>
          </S.Main>
        </S.Inner>
        <TicketFooter
          likesCount={likesCount}
          comments={comments}
          likedByCurrentUser={likedByCurrentUser}
          ticketId={id!}
          creationTime={creationTime}
        />
      </Link>
    </Section>
  );
};
export default TicketListItem;
