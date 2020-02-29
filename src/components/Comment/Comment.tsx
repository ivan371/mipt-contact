import React from "react";
import { Section, Paragraph } from "../styled";
import * as S from "./styled";

export interface ICommentProps {
  comment: IComment;
}

const Comment: React.FC<ICommentProps> = ({ comment }) => {
  return (
    <Section>
      <S.Wrapper>
        <Paragraph>{comment.body}</Paragraph>
        <Paragraph>{comment.author.name}</Paragraph>
      </S.Wrapper>
    </Section>
  );
};

export default Comment;
