import { Dispatch } from "redux";
import ApiClientService from "../services/ApiClientService";
import { ticketsNormalize, ticketNormalize } from "../schemas/ticket";

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

export function fetchTicket(ticketId: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: TICKET_GET
      });

      const data = await ApiClientService(`ticketManagement/${ticketId}`);

      if (data) {
        dispatch({
          type: TICKET_GET_SUCCESS,
          payload: ticketNormalize(data)
        });
      }
    } catch (err) {}
  };
}

interface ITicketCreateParams {
  title: string;
  description: string;
  isPrivate: boolean;
  category: string;
  isEdit?: boolean;
  ticketId?: string;
}

export function ticketCreate({
  title,
  isPrivate,
  description,
  category,
  isEdit,
  ticketId
}: ITicketCreateParams): any {
  return async (dispatch: Dispatch) => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("private", String(isPrivate));
    formData.append("description", String(description));
    formData.append("category", String(category));

    let data;
    if (isEdit) {
      data = await ApiClientService(`ticketManagement/${ticketId}`, {
        method: "put",
        body: formData
      });

      dispatch({
        type: TICKET_GET_SUCCESS,
        payload: ticketNormalize(data)
      });
    } else {
      data = await ApiClientService("ticketManagement/", {
        method: "post",
        body: formData
      });
    }
    return data;
  };
}

interface ITicketLikeParams {
  ticketId: string;
}

export function ticketLike({ ticketId }: ITicketLikeParams) {
  return async (dispatch: Dispatch) => {
    const data = await ApiClientService(`ticketManagement/${ticketId}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    dispatch({
      type: TICKET_GET_SUCCESS,
      payload: ticketNormalize(data)
    });
  };
}

interface ITicketNextActionParams {
  ticketId: string;
  status: IStatus;
}

export function ticketNextStatus({
  ticketId,
  status
}: ITicketNextActionParams) {
  return async (dispatch: Dispatch) => {
    const data = await ApiClientService(
      `ticketManagement/${ticketId}/changeStatus`,
      {
        method: "PUT",
        body: JSON.stringify({ status }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    dispatch({
      type: TICKET_GET_SUCCESS,
      payload: ticketNormalize(data)
    });
  };
}
