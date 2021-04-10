export const __prod__ = process.env.NODE_ENV === "production";
export const API_BASE_URL = __prod__
  ? "https://goloop-micro-products.vercel.app/api"
  : "http://localhost:3001/api";
