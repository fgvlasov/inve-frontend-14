import { getStrapiURL, fetchAPI } from "./api";

const sendEmail = async (data) => {
  const url = "/zayavka-forms";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }), // Wrap the data in the "data" payload
  };

  try {
    await fetchAPI(url, {}, options);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw Error("Sending error");
    //console.error("Email sending error:", error);
  }
};

export default sendEmail;
