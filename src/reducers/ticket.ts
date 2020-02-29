import { Action } from "redux";
import {
  TICKETS_GET,
  TICKETS_GET_SUCCESS,
  TICKET_GET,
  TICKET_GET_SUCCESS
} from "../actions/ticket";
import { COMMENT_GET } from "../actions/comment";

const initialState: ITicketState = {
  ticketList: [],
  tickets: {},
  isLoading: false
};

interface IAction extends Action {
  payload: any;
  ticketId?: string;
}

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case TICKET_GET:
    case TICKETS_GET: {
      return {
        ...state,
        isLoading: true
      };
    }
    case TICKETS_GET_SUCCESS:
      return {
        ...state,
        tickets: action.payload.entities.ticket,
        ticketList: action.payload.result as number[],
        isLoading: false
      };
    case TICKET_GET_SUCCESS:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ...action.payload.entities.ticket
        },
        isLoading: false
      };
    case COMMENT_GET:
      const comment = action.payload.entities.comment;

      if (!action.ticketId || !comment) {
        return state;
      }

      const currentTicket = state.tickets[action.ticketId];

      if (!currentTicket.comments) {
        return {
          ...state,
          tickets: {
            ...state.tickets,
            [action.ticketId]: {
              ...currentTicket,
              comments: [action.payload.result]
            }
          }
        };
      }

      return {
        ...state,
        tickets: {
          ...state.tickets,
          [action.ticketId]: {
            ...currentTicket,
            comments: [...currentTicket.comments, action.payload.result]
          }
        }
      };
  }
  return state;
}
