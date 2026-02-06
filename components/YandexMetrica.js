"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

export const YandexMetrica = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hit = useCallback((url) => {
    ym("hit", url);
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    const url = pathname + (query ? `?${query}` : "");
    hit(url);
  }, [pathname, searchParams, hit]);
  return (
    <>
      <YMInitializer
        accounts={[50335891]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          ecommerce: "dataLayer",
          webvisor: true,
          defer: true,
        }}
        version="1"
      />
      {children}
    </>
  )
}