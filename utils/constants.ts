export const __prod__ = process.env.NODE_ENV === "production";
export const API_BASE_URL = __prod__
  ? "https://goloop-micro-products.vercel.app/api"
  : "http://localhost:3001/api";
export const AUTH_API_BASE_URL = __prod__
  ? "https://goloop-micro-auth.vercel.app/api"
  : "http://localhost:3002/api";
export const report_email_url = __prod__
  ? "https://goloop-micro-email.vercel.app/api/report"
  : "http://localhost:3003/api/report";
