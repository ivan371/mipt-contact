import React from "react";
import * as S from "./styled";

interface ITicketUsersProps {
  author?: IUser;
  assignee?: IUser;
}

const TicketUsers: React.FC<ITicketUsersProps> = ({ author, assignee }) => {
  return (
    <div>
      {author && (
        <S.Inner>
          <span>Автор:</span> <span>{author.name}</span>
        </S.Inner>
      )}
      {assignee && (
        <S.Inner>
          <span>Исполнитель: </span> <span>{assignee.name}</span>
        </S.Inner>
      )}
    </div>
  );
};

export default TicketUsers;
