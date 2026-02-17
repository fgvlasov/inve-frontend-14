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
  const payload = typeof data === "string" ? JSON.parse(data) : data;

  const response = await fetchAPI("/global", { fields: ["Email_forms"] });
  const to = response?.data?.attributes?.Email_forms;

  if (!to) {
    throw new Error("Recipient email is missing (Email_forms) in Strapi global settings");
  }

  const formName = payload?.formName || "Form enquiry";

  const emailHtml = await CreateEmail(payload);

  const result = await transporter.sendMail({
    from: user,
    subject: formName,
    to,
    html: emailHtml,
  });

  const failed = (result.rejected || []).concat(result.pending || []).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }

  return result;
};
