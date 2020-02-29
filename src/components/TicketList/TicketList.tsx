import React from "react";
import { useDispatch } from "react-redux";
import { fetchTickets } from "../../actions/ticket";
import TicketListItem from "../TicketListItem";
import * as S from "./styled";

export const tickets: ITicket[] = [
  {
    id: "1",
    title: "Первое обращение",
    description: "Описание первого обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: [
      {
        id: "1",
        body: "На самом деле проблема достаточно актуальна",
        author: {
          id: "2",
          name: "Бабин Олег"
        }
      },
      {
        id: "2",
        body: "Полностью согласен",
        author: {
          id: "3",
          name: "Айнулин Ринат"
        }
      }
    ]
  },
  {
    id: "2",
    title: "Второе обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  },
  {
    id: "3",
    title: "Третье обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  },
  {
    id: "4",
    title: "Четверое обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  },
  {
    id: "5",
    title: "Пятое обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  },
  {
    id: "6",
    title: "Шестое обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  },
  {
    id: "7",
    title: "Седьмое обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  },
  {
    id: "8",
    title: "Восьмое обращение",
    description: "Описание второго обращения",
    category: "Ремонт комнаты",
    status: "Новый",
    author: {
      id: "1",
      name: "Иван Петров"
    },
    comments: []
  }
];

const TicketList: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    void dispatch(fetchTickets());
  }, []);

  return (
    <S.Wrapper>
      {tickets.map(ticket => (
        <TicketListItem key={ticket.id} ticket={ticket}></TicketListItem>
      ))}
    </S.Wrapper>
  );
};

export default TicketList;
