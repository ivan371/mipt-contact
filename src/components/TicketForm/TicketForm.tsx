import React from "react";
import Input from "../Input";
import { Button, Paragraph } from "../styled";
import * as S from "./styled";

export interface ITicketFormProps {
  isEdit?: boolean;
}

const TicketForm: React.FC<ITicketFormProps> = ({ isEdit }) => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Paragraph>Название проблемы</Paragraph>
        <Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Категория</Paragraph>
        <Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Описание</Paragraph>
        <Input isTextarea />
      </S.InputWrapper>
      <Button>{isEdit ? "Редактировать" : "Отправить запрос"}</Button>
    </S.Wrapper>
  );
};

export default TicketForm;
