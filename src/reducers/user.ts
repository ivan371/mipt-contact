import { Action } from "redux";
import { CURRENT_USER_GET } from "../actions/user";

const initialState: IUserState = {
  user: undefined
};

interface IAction extends Action {
  payload: any;
}

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case CURRENT_USER_GET:
      return {
        user: action.payload
      };
  }
  return state;
}
