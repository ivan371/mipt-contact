import { Action } from "redux";

const initialState: ICommentState = {
  comments: {}
};

interface IAction extends Action {
  payload: any;
}

export default function(state = initialState, action: IAction) {
  const comments = action.payload?.entities?.comment;
  if (comments) {
    return {
      ...state,
      comments: {
        ...state.comments,
        ...comments
      }
    };
  }

  return state;
}
