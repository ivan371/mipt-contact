const BASE_URL = "http://rinataynulin.fvds.ru/api/v1/";

export default async (
  url: RequestInfo,
  params: RequestInit = {}
): Promise<any> => {
  const headers = {} as any;
  const token = window.localStorage.getItem("token");

  if (token) {
    headers.Authorization = `${token}`;
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...params,
    headers: {
      ...params.headers,
      ...headers
    }
  });

  return await response.json();
};
