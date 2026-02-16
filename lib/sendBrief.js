import { fetchAPI } from "./api";

const sendBrief = async (data) => {
  const url = "/briefs";

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  };

  try {
    await fetchAPI(url, {}, options);

    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error("Sending error");
  }
};

export default sendBrief;
