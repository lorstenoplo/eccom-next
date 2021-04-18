import { AUTH_API_BASE_URL } from "../../utils/constants";

export default async function me(token: string) {
  console.log(token);
  const response = await fetch(`${AUTH_API_BASE_URL}/me/${token}`).then((res) =>
    res.json()
  );
  console.log(response);
  return response;
}
