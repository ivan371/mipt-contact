import ApiClientService from "../services/ApiClientService";

export interface IRegisterProps {
  login: string;
  password: string;
  name: string;
}

export function register({ login, password, name }: IRegisterProps) {
  return async () => {
    const formData = new FormData();

    formData.append("login", login);
    formData.append("password", password);
    formData.append("name", name);

    const { token } = await ApiClientService("security/register", {
      method: "POST",
      body: formData
    });

    window.localStorage.setItem("token", token);
  };
}

export interface ILoginProps {
  login: string;
  password: string;
}

export function authenticate({ login, password }: ILoginProps) {
  return async () => {
    const formData = new FormData();

    formData.append("login", login);
    formData.append("password", password);

    const { token } = await ApiClientService("security/authenticate", {
      method: "POST",
      body: formData
    });

    window.localStorage.setItem("token", token);
  };
}
