import React from "react";
import { useDispatch } from "react-redux";
import Input from "../Input";
import { register, authenticate } from "../../actions/user";
import { Button, Paragraph } from "../styled";
import * as S from "./styled";

export interface ILoginProps {
  onClose: () => void;
}

const Login: React.FC<ILoginProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [login, setLogin] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    setError("");
  }, [name, password, login]);

  const onRegister = async () => {
    if (!login || !password || !name) {
      setError("Заполните все поля");

      return;
    }
    try {
      await dispatch(register({ login, name, password }));
      onClose();
    } catch (err) {
      setError(err);
    }
  };

  const onLogin = async () => {
    if (!login || !password) {
      setError("Заполните все поля");

      return;
    }
    try {
      await dispatch(authenticate({ login, password }));
      onClose();
    } catch (err) {
      setError(err);
    }
  };

  if (isLogin) {
    return (
      <S.Wrapper>
        <S.InputWrapper>
          <Paragraph>Логин</Paragraph>
          <Input value={login} onChange={setLogin} />
        </S.InputWrapper>
        <S.InputWrapper>
          <Paragraph>Пароль</Paragraph>
          <Input value={password} onChange={setPassword} type="password" />
        </S.InputWrapper>
        {error && <Paragraph isDanger>{error}</Paragraph>}
        <Button onClick={() => setIsLogin(false)}>Зарегистрироваться</Button>
        <Button onClick={onLogin}>Войти</Button>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Paragraph>Логин</Paragraph>
        <Input value={login} onChange={setLogin} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Имя</Paragraph>
        <Input value={name} onChange={setName} />
      </S.InputWrapper>
      <S.InputWrapper>
        <Paragraph>Пароль</Paragraph>
        <Input value={password} onChange={setPassword} type="password" />
      </S.InputWrapper>
      {error && <Paragraph isDanger>{error}</Paragraph>}
      <Button onClick={onRegister}>Зарегистрироваться</Button>
    </S.Wrapper>
  );
};

export default Login;
