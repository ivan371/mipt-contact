import React from "react";
import { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTicket, ticketNextStatus } from "../../actions/ticket";
import Comments from "../Comments";
import Spinner from "../Spinner";
import TicketFooter from "../TicketFooter";
import Modal from "../Modal";
import TicketForm from "../TicketForm";
import StatusChange from "../StatusChange";
import { Section, Paragraph, Label, Button, Title } from "../styled";
import * as S from "./styled";
import { getStatusActionText } from "./../../utils";
import { statuses } from "./../../constants";

interface IStateData {
  isLoading: boolean;
  ticket: ITicket;
}

const statusStyles = css`
  min-width: 400px;
`;

const TicketDetails: React.FC = () => {
  const { id } = useParams();
  const [isOpenTicketForm, setIsOpenTicketForm] = React.useState(false);
  const [isOpenStatusModal, setIsOpenStatusModal] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    void dispatch(fetchTicket(id!));
  }, [id]);

  const onChangeStatus = (status: IStatus) => {
    dispatch(ticketNextStatus({ ticketId: id!, status }));
    setIsOpenStatusModal(false);
  };

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
        <Title>НЕ УДАЛОСЬ НАЙТИ ОБРАЩЕНИЕ</Title>
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
  const actionStatusText = getStatusActionText(status);
  const isEditEnabled = status === "OPEN" || status === "RESOLVE";

  return (
    <React.Fragment>
      <Section>
        <Title>{title}</Title>
        <S.Inner>
          <S.Main>
            {statusLabel && (
              <Label>
                <Paragraph>{statusLabel}</Paragraph>
              </Label>
            )}
            <Paragraph>{category}</Paragraph>
            <Paragraph>{description}</Paragraph>
          </S.Main>
          <S.Main>
            <S.ActionWrapper>
              {actionStatusText && (
                <Button fullWidth onClick={() => setIsOpenStatusModal(true)}>
                  Сменить статус
                </Button>
              )}
              {isEditEnabled && (
                <Button fullWidth onClick={() => setIsOpenTicketForm(true)}>
                  Редактировать
                </Button>
              )}
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
      <Modal
        isOpen={isOpenStatusModal}
        toggleModal={() => setIsOpenStatusModal(false)}
        modalStyles={statusStyles}
      >
        <StatusChange
          status={status}
          onChangeStatus={onChangeStatus}
          onClose={() => setIsOpenStatusModal(false)}
        />
      </Modal>
    </React.Fragment>
  );
};

export default TicketDetails;
