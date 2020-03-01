import React from "react";
import { Section, Paragraph } from "../styled";
import * as S from "./styled";

export interface ICommentProps {
  comment: IComment;
}

const Comment: React.FC<ICommentProps> = ({ comment }) => {
  const { body, author } = comment;
  const isAdmin = author.role === "moderator";

  return (
    <Section>
      <S.Wrapper>
        <Paragraph>{body}</Paragraph>
        <S.Inner>
          {isAdmin && <S.AdminLabel>admin</S.AdminLabel>}
          <S.UserName>{author.name}</S.UserName>
        </S.Inner>
      </S.Wrapper>
    </Section>
  );
};

export default Comment;
