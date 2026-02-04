import { fetchAPI } from "lib/api";
import { CreateEmail } from "./createEmail";
var nodemailer = require("nodemailer");

const user = "form@invert.studio";
const pass = 'JTbtiF9g7pDimERwJdJP'

export const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
});

export const SendMail = async (data) => {
  const response = await fetchAPI("/global", {
    fields: ["Email_forms"],
  });
  const { formName } = JSON.parse(data);
  const email = await CreateEmail(data)
  const result = await transporter.sendMail({
    from: user,
    subject: formName,
    to: response.data.attributes.Email_forms,
    html: email,
  });
  const failed = result.rejected.concat(result.pending).filter(Boolean);
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
  }
  return result;
};
