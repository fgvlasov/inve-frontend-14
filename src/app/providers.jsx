"use client";

import { GlobalContext } from "./global-context";
import { ToastrProvider } from "@/components/Toastr/ToastrProvider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { YandexMetrica } from "@/components/YandexMetrica";

export default function Providers({ children, global }) {
  // global here is global.attributes from Strapi (or undefined/null)
  const siteKey = global?.CAPTCHA_SITE_KEY;

  const content = (
    <GlobalContext.Provider value={global ?? {}}>
      <ToastrProvider>{children}</ToastrProvider>
    </GlobalContext.Provider>
  );

  return (
    <YandexMetrica>
      {siteKey ? (
        <GoogleReCaptchaProvider
          reCaptchaKey={siteKey}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          {content}
        </GoogleReCaptchaProvider>
      ) : (
        // If key is missing, don't break the app
        content
      )}
    </YandexMetrica>
  );
}
