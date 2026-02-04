import { fetchAPI } from "./api";

const sendBrief = async (data) => {
  const url = "/briefs";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }), // Wrap the data in the "data" payload
  };

  try {
    const response = await fetchAPI(url, {}, options);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw Error("Sending error");
  }
};

export default sendBrief;
