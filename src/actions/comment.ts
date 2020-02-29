import { Dispatch } from "redux";
import ApiClientService from "../services/ApiClientService";
import { commentNormalize } from "../schemas/comment";

export const COMMENT_GET = "COMMENT_GET";

export interface ICommentCreateParams {
  body: string;
  ticketId: string;
}

export function ticketCreate({ body, ticketId }: ICommentCreateParams) {
  return async (dispatch: Dispatch) => {
    const data = await ApiClientService(
      `ticketManagement/${ticketId}/comment`,
      {
        method: "post",
        body: JSON.stringify({ body }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    dispatch({
      type: COMMENT_GET,
      payload: commentNormalize(data),
      ticketId
    });
  };
}
