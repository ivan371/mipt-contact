import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../actions/ticket";
import TicketListItem from "../TicketListItem";
import Spinner from "../Spinner";
import * as S from "./styled";

interface ITicketListProps {
  isCurrent?: boolean;
}

const TicketList: React.FC<ITicketListProps> = ({ isCurrent }) => {
  const dispatch = useDispatch();

  const user = useSelector<IState, IAuthUser | undefined>(
    state => state.user.user
  );

  const isAdmin = user ? user.role === "moderator" : false;
  const isAuth = Boolean(window.localStorage.getItem("token"));

  if (!isAuth && isCurrent) {
    window.location.href = "/";
  }

  React.useEffect(() => {
    void dispatch(fetchTickets({ isCurrent, isAdmin }));
  }, [isCurrent, isAdmin]);

  const { ticketList, isLoading, tickets } = useSelector<IState, ITicketState>(
    state => {
      const { ticketList, isLoading, tickets } = state.ticket;

      return {
        ticketList,
        isLoading,
        tickets
      };
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <S.Wrapper>
      {ticketList.map(ticketId => (
        <TicketListItem
          key={ticketId}
          ticket={tickets[ticketId]}
        ></TicketListItem>
      ))}
    </S.Wrapper>
  );
};

export default TicketList;
