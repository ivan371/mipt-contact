import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../actions/ticket";
import TicketListItem from "../TicketListItem";
import Spinner from "../Spinner";
import * as S from "./styled";

const TicketList: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    void dispatch(fetchTickets());
  }, []);

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
