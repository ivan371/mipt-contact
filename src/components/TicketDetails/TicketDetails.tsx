import React from "react";
import { useParams } from "react-router-dom";
import { tickets } from "../TicketList/TicketList";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import Modal from "../Modal";
import TicketForm from "../TicketForm";
import { Section, Paragraph, Label, Button } from "../styled";
import favorite from "../../assets/favorite.svg";
import comment from "../../assets/comment.svg";
import * as S from "./styled";

const TicketDetails: React.FC = () => {
  const { id } = useParams();
  const ticket = tickets.find(({ id: ticketId }) => id === ticketId);
  const [isOpenTicketForm, setIsOpenTicketForm] = React.useState(false);

  if (!ticket) {
    return (
      <Section>
        <S.Title>НЕ УДАЛОСЬ НАЙТИ ОБРАЩЕНИЕ</S.Title>
      </Section>
    );
  }

  return (
    <React.Fragment>
      <Section>
        <S.Inner>
          <S.Main>
            <S.Title>{ticket.title}</S.Title>
            <Paragraph>{ticket.category}</Paragraph>
            <Paragraph>{ticket.description}</Paragraph>
          </S.Main>
          <S.Main>
            <S.ActionWrapper>
              <Label>
                <Paragraph>{ticket.status}</Paragraph>
              </Label>
              <Button fullWidth onClick={() => setIsOpenTicketForm(true)}>
                Редактировать
              </Button>
            </S.ActionWrapper>
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
      </Section>
      <S.CommentsWrapper>
        <React.Fragment>
          {ticket.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </React.Fragment>
        <CommentForm />
      </S.CommentsWrapper>
      <Modal
        isOpen={isOpenTicketForm}
        toggleModal={() => setIsOpenTicketForm(false)}
      >
        <TicketForm isEdit />
      </Modal>
    </React.Fragment>
  );
};

export default TicketDetails;
