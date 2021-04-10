import { API_BASE_URL } from "../../utils/constants";

export const fetchProduct = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/product/${id}`).then((res) =>
    res.json()
  );

  const { product } = response;
  return product;
};
