import { Dispatch } from "redux";
import ApiClientService from "../services/ApiClientService";

export const CURRENT_USER_GET = "CURRENT_USER_GET";

export interface IRegisterProps {
  login: string;
  password: string;
  name: string;
}

export function register({ login, password, name }: IRegisterProps) {
  return async () => {
    try {
      const formData = new FormData();

      formData.append("login", login);
      formData.append("password", password);
      formData.append("name", name);

      const { token } = await ApiClientService("security/register", {
        method: "POST",
        body: formData
      });

      if (token) {
        window.localStorage.setItem("token", token);
      } else {
        throw "Не удалось зарегистрироваться";
      }
    } catch (err) {
      throw "Не удалось зарегистрироваться";
    }
  };
}

export interface ILoginProps {
  login: string;
  password: string;
}

export function authenticate({ login, password }: ILoginProps) {
  return async () => {
    try {
      const formData = new FormData();

      formData.append("login", login);
      formData.append("password", password);

      const { token } = await ApiClientService("security/authenticate", {
        method: "POST",
        body: formData
      });

      if (token) {
        window.localStorage.setItem("token", token);
      } else {
        throw "Не верное имя пользователя или пароль";
      }
    } catch (err) {
      throw "Не верное имя пользователя или пароль";
    }
  };
}

export function getCurrentUser() {
  return async (dispatch: Dispatch) => {
    try {
      const data = await ApiClientService("security/currentUser");

      dispatch({
        type: CURRENT_USER_GET,
        payload: data
      });
    } catch (err) {}
  };
}
