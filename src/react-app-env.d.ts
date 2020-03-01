/// <reference types="react-scripts" />

type IStatus = "OPEN" | "CLOSED" | "IN_PROGRESS" | "RESOLVE";

interface ITicket {
  id: string;
  title: string;
  description: string;
  category: string;
  author: IUser;
  status: IStatus;
  assignee?: IUser;
  comments: string[];
  likesCount?: number;
  likedByCurrentUser?: boolean;
  isPrivate: boolean;
}

interface IUser {
  id: string;
  name: string;
}

interface IComment {
  id: string;
  body: string;
  author: IUser;
}

interface ITicketState {
  isLoading: boolean;
  ticketList: string[];
  tickets: { [key: string]: ITicket };
}

interface ICommentState {
  comments: { [key: string]: IComment };
}

interface IState {
  ticket: ITicketState;
  comment: ICommentState;
}
