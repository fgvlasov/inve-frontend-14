import loadNamespaces from "next-translate/loadNamespaces";

const FALLBACK_SEND_FORM = {
  emailTitle: "Новая заявка",
  formName: "Форма",
  name: "Имя",
  phone: "Телефон",
  email: "Email",
  message: "Сообщение",
  categories: "Категория",
  // добавь сюда ключи, которые реально шлёшь
};

export const CreateEmail = async (data) => {
  const payload = typeof data === "string" ? JSON.parse(data) : data;

  // Пытаемся получить переводы, но не ломаемся если не получилось
  let sendForm = FALLBACK_SEND_FORM;

  try {
    const ns = await loadNamespaces({ locale: "ru", pathname: "/common" });

    // next-translate может отдавать разные формы; безопасно достаём
    const fromNs =
      ns?.__namespaces?.common?.sendForm ||
      ns?.__namespaces?.["common"]?.sendForm ||
      ns?.sendForm || // иногда кладут прямо
      null;

    if (fromNs && typeof fromNs === "object") sendForm = { ...FALLBACK_SEND_FORM, ...fromNs };
  } catch (e) {
    // оставляем fallback
    console.log("[CreateEmail] loadNamespaces failed, using fallback:", e?.message || e);
  }

  const rows = Object.entries(payload || {})
    .filter(([_, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => {
      const label = sendForm?.[key] ?? key;

      if (key === "categories") {
        const name =
          value?.attributes?.name ??
          value?.data?.attributes?.name ??
          (Array.isArray(value?.data)
            ? value.data
                .map((v) => v?.attributes?.name)
                .filter(Boolean)
                .join(", ")
            : null) ??
          (Array.isArray(value)
            ? value
                .map((v) => v?.attributes?.name || v?.name)
                .filter(Boolean)
                .join(", ")
            : null) ??
          (typeof value === "string" ? value : null) ??
          "";

        return `<p>${escapeHtml(label)}: <span>${escapeHtml(String(name))}</span></p>`;
      }

      return `<p>${escapeHtml(label)}: <span>${escapeHtml(String(value))}</span></p>`;
    })
    .join("");

  return `
    <body>
      <h1>${escapeHtml(sendForm.emailTitle || "New form submission")}</h1>
      ${rows}
    </body>
  `;
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
