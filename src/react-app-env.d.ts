/// <reference types="react-scripts" />

interface ITicket {
  id: string;
  title: string;
  description: string;
  category: string;
  author: IUser;
  status: string;
  assignee?: IUser;
  comments: IComment[];
  likesCount?: number;
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
