import "./globals.css";
import { fetchAPI } from "../../lib/api";
import Providers from "./providers";

export const revalidate = 60; // optional: ISR for the global fetch

export const metadata = {
  // basic default; you can also set title/description dynamically below if you want
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "yandex-verification": "4e608efa98929572",
  },
};

async function getGlobal() {
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: { populate: "*" },
    },
  });

  return globalRes?.data ?? null;
}

export default async function RootLayout({ children }) {
  const global = await getGlobal(); // ✅ server-side fetch once

  return (
    <html lang='en'>
      <body>
        {/* ✅ All client-only providers go here */}
        <Providers global={global?.attributes}>{children}</Providers>
      </body>
    </html>
  );
}
