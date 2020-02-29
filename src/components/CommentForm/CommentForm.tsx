import React from "react";
import Input from "../Input";
import { Button, Section } from "../styled";
import * as S from "./styled";

const CommentForm: React.FC = () => {
  return (
    <Section>
      <S.Wrapper>
        <Input isTextarea fullWidth />
        <Button>Оставить комментарий</Button>
      </S.Wrapper>
    </Section>
  );
};

export default CommentForm;
