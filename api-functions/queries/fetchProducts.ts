import { API_BASE_URL } from "../../utils/constants";

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`).then((res) =>
    res.json()
  );

  const { products } = response;
  return products;
};
