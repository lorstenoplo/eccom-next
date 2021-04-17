import { AUTH_API_BASE_URL } from "../../utils/constants";

export default async function register(values: any) {
  const res = await fetch(`${AUTH_API_BASE_URL}/signup`, {
    method: "POST",
    body: JSON.stringify(values),
  });
  return res.json();
}
