import React from "react";
import Input from "../Input";
import { Button, Paragraph } from "../styled";
import * as S from "./styled";

const Login: React.FC = () => {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Paragraph>Логин</Paragraph>
        <Input />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Пароль</Paragraph>
        <Input />
      </S.InputWrapper>
      <Button>Войти</Button>
    </S.Wrapper>
  );
};

export default Login;
