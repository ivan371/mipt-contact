import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTicket } from "../../actions/ticket";
import Comments from "../Comments";
import Spinner from "../Spinner";
import TicketFooter from "../TicketFooter";
import Modal from "../Modal";
import TicketForm from "../TicketForm";
import { Section, Paragraph, Label, Button } from "../styled";
import * as S from "./styled";
import { statuses } from "./../../constants";

interface IStateData {
  isLoading: boolean;
  ticket: ITicket;
}

const TicketDetails: React.FC = () => {
  const { id } = useParams();
  const [isOpenTicketForm, setIsOpenTicketForm] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    void dispatch(fetchTicket(id!));
  }, [id]);

  const { isLoading, ticket } = useSelector<IState, IStateData>(state => {
    const { isLoading, tickets } = state.ticket;

    const ticket = tickets[id!];

    return {
      ticket,
      isLoading
    };
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (!ticket) {
    return (
      <Section>
        <S.Title>НЕ УДАЛОСЬ НАЙТИ ОБРАЩЕНИЕ</S.Title>
      </Section>
    );
  }

  const {
    title,
    category,
    description,
    status,
    author,
    assignee,
    likesCount,
    comments,
    isPrivate,
    likedByCurrentUser
  } = ticket;

  const statusLabel = statuses[status];

  return (
    <React.Fragment>
      <Section>
        <S.Inner>
          <S.Main>
            <S.Title>{title}</S.Title>
            <Paragraph>{category}</Paragraph>
            <Paragraph>{description}</Paragraph>
          </S.Main>
          <S.Main>
            <S.ActionWrapper>
              {statusLabel && (
                <Label>
                  <Paragraph>{statusLabel}</Paragraph>
                </Label>
              )}
              <Button fullWidth onClick={() => setIsOpenTicketForm(true)}>
                Редактировать
              </Button>
            </S.ActionWrapper>
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
        />
      </Section>
      <Comments commentList={comments} />
      <Modal
        isOpen={isOpenTicketForm}
        toggleModal={() => setIsOpenTicketForm(false)}
      >
        <TicketForm
          isEdit
          title={title}
          description={description}
          isPrivate={isPrivate}
          category={category}
          onClose={() => setIsOpenTicketForm(false)}
        />
      </Modal>
    </React.Fragment>
  );
};

export default TicketDetails;
