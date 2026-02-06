import loadNamespaces from "next-translate/loadNamespaces";

export const CreateEmail = async (data) => {
  const emailData = JSON.parse(data);
  const {
    __namespaces: {
      common: { sendForm },
    },
  } = await loadNamespaces({ locale: "ru", pathname: "/common" });
  //console.log(sendForm);

  const email = `
  <body >
  	<h1>${sendForm.emailTitle}</h1>
    ${Object.entries(emailData)
    .filter(([key, value]) => value)
    .map(([key, value]) =>
      key === "categories"
        ? `<p>
                ${`${sendForm[key]}`}: <span>${value.attributes.name}</span>
              </p>`
        : `<p>
                ${`${sendForm[key]}`}: <span>${value}</span>
              </p>`
    )
    .join("")}

  </body>
  `;

  return email;
};
