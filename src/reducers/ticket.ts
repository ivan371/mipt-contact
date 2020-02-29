import { Action } from "redux";
import { TICKETS_GET, TICKETS_GET_SUCCESS } from "../actions/ticket";

const initialState: ITicketState = {
  ticketList: [],
  tickets: {},
  isLoading: false
};

interface IAction extends Action {
  payload: any;
}

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case TICKETS_GET: {
      return {
        ...state,
        isLoading: true
      };
    }
    case TICKETS_GET_SUCCESS:
      return {
        ...state,
        tickets: action.payload.entities.product,
        ticketList: action.payload.result as number[],
        isLoading: false
      };
  }
  return state;
}
