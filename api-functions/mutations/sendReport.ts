import { report_email_url } from "../../utils/constants";

export default async function sendReportToApi(values: any) {
  const res = await fetch(report_email_url, {
    method: "POST",
    body: JSON.stringify(values),
  });

  return res.json();
}
