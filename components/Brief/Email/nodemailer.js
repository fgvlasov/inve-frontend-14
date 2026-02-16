import nodemailer from "nodemailer";
import { fetchAPI } from "@/lib/api";
import { CreateEmail } from "./createEmail";

const user = process.env.NEXT_EMAIL;
const pass = process.env.NEXT_EMAIL_PASS;

if (!user || !pass) {
  throw new Error("Email SMTP env is missing: NEXT_EMAIL and/or NEXT_EMAIL_PASS");
}

export const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: { user, pass },
});

export const SendMail = async (data) => {
  const response = await fetchAPI("/global", {
    fields: ["Email_forms"],
  });

  // если data уже объект — не парсь
  const payload = typeof data === "string" ? JSON.parse(data) : data;
  const formName = payload?.formName || "Form enquiry";

  const emailHtml = await CreateEmail(data);

  const result = await transporter.sendMail({
    from: user,
    subject: formName,
    to: response?.data?.attributes?.Email_forms,
    html: emailHtml,
  });

  const failed = (result.rejected || []).concat(result.pending || []).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }

  return result;
};
