import loadNamespaces from "next-translate/loadNamespaces";

export const CreateEmail = async (data) => {
  // 1) Нормализуем вход (строка JSON или объект)
  const payload = typeof data === "string" ? JSON.parse(data) : data;

  // 2) Подтягиваем переводы
  const {
    __namespaces: {
      common: { sendForm },
    },
  } = await loadNamespaces({ locale: "ru", pathname: "/common" });

  // 3) Собираем строки полей
  const rows = Object.entries(payload || {})
    .filter(([_, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => {
      const label = sendForm?.[key] ?? key;

      // Спец-обработка categories (бывает объект, массив, strapi-объект и т.д.)
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

        return `
          <p>
            ${escapeHtml(String(label))}: <span>${escapeHtml(String(name))}</span>
          </p>
        `;
      }

      // Обычные поля
      return `
        <p>
          ${escapeHtml(String(label))}: <span>${escapeHtml(String(value))}</span>
        </p>
      `;
    })
    .join("");

  // 4) Собираем письмо
  const email = `
    <body>
      <h1>${escapeHtml(String(sendForm?.emailTitle ?? "New form submission"))}</h1>
      ${rows}
    </body>
  `;

  return email;
};

// Простое экранирование HTML (чтобы значения не ломали письмо и не вставляли теги)
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
