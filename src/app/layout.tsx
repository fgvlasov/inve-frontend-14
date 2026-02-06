import "./globals.css";
import { getGlobal } from "@/lib/metadata";
import Providers from "./providers";

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
    <html lang='en'>
      <body>
        {/* ✅ All client-only providers go here */}
        <Providers global={global?.attributes}>{children}</Providers>
      </body>
    </html>
  );
}
