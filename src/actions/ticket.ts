import { Dispatch } from "redux";
import ApiClientService from "../services/ApiClientService";
import { ticketsNormalize } from "../schemas/ticket";

export const TICKETS_GET = "TICKETS_GET";
export const TICKETS_GET_SUCCESS = "TICKETS_GET_SUCCESS";
export const TICKET_GET = "TICKET_GET";
export const TICKET_GET_SUCCESS = "TICKET_GET_SUCCESS";

export function fetchTickets() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: TICKETS_GET
      });

      const data = await ApiClientService("ticketManagement/");

      if (data && Array.isArray(data)) {
        dispatch({
          type: TICKETS_GET_SUCCESS,
          payload: ticketsNormalize(data)
        });
      }
    } catch (err) {}
  };
}
