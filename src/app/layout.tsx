import "./globals.css";
import { getGlobal } from "@/lib/metadata";
import Providers from "./providers";
import { Suspense } from "react";

export const revalidate = 60;

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "yandex-verification": "4e608efa98929572",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const global = await getGlobal("ru");

  return (
    <html lang='ru'>
      <body>
        <Suspense fallback={null}>
          <Providers global={global?.attributes}>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
