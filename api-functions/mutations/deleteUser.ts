import { AUTH_API_BASE_URL } from "../../utils/constants";

export default async function deleteUser(values: any) {
  const res = await fetch(`${AUTH_API_BASE_URL}/delete`, {
    method: "POST",
    body: JSON.stringify(values),
  });

  return res.json();
}
