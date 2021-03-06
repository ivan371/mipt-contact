import React from "react";
import { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchTicket,
  ticketNextStatus,
  ticketAssign
} from "../../actions/ticket";
import Comments from "../Comments";
import Spinner from "../Spinner";
import TicketFooter from "../TicketFooter";
import Modal from "../Modal";
import TicketForm from "../TicketForm";
import StatusChange from "../StatusChange";
import TicketUsers from "../TicketUsers";
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
  const user = useSelector<IState, IAuthUser | undefined>(
    state => state.user.user
  );

  React.useEffect(() => {
    void dispatch(fetchTicket(id!));
  }, [id]);

  const onChangeStatus = (status: IStatus) => {
    dispatch(ticketNextStatus({ ticketId: id!, status }));
    setIsOpenStatusModal(false);
  };

  const onAssign = () => {
    dispatch(ticketAssign({ ticketId: id! }));
    dispatch(ticketNextStatus({ ticketId: id!, status: "IN_PROGRESS" }));
  };

  const { isLoading, ticket } = useSelector<IState, IStateData>(state => {
    const { isLoading, tickets } = state.ticket;

    const ticket = tickets[id!];

    return {
      ticket,
      isLoading
    };
  });

  const isAdmin = user ? user.role === "moderator" : false;

  const isCurrentUser =
    user && ticket && ticket.author ? user.id === ticket.author.id : false;

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
    likedByCurrentUser,
    creationTime
  } = ticket;

  const isAssignToMe = user && assignee && user.id === assignee.id;

  const statusLabel = statuses[status];
  const actionStatusText = getStatusActionText(status);
  const isUserActionsEnable =
    isCurrentUser && (status === "OPEN" || status === "RESOLVE");
  const isAdminActionEnable =
    isAdmin && isAssignToMe && (status === "OPEN" || status === "IN_PROGRESS");

  const isEditEnabled = !isAdmin && isUserActionsEnable;
  const isChangeStatusEnabled =
    isAdminActionEnable || (isCurrentUser && status === "RESOLVE");
  const isAssignEnabled = isAdmin && status === "OPEN";

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
              {isChangeStatusEnabled && actionStatusText && (
                <Button fullWidth onClick={() => setIsOpenStatusModal(true)}>
                  Сменить статус
                </Button>
              )}
              {isAssignEnabled && (
                <Button onClick={onAssign}>Рассмотреть</Button>
              )}
              {isEditEnabled && (
                <Button fullWidth onClick={() => setIsOpenTicketForm(true)}>
                  Редактировать
                </Button>
              )}
            </S.ActionWrapper>
            <TicketUsers author={author} assignee={assignee} />
          </S.Main>
        </S.Inner>
        <TicketFooter
          likesCount={likesCount}
          comments={comments}
          likedByCurrentUser={likedByCurrentUser}
          ticketId={id!}
          creationTime={creationTime}
          title={title}
          description={description}
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
