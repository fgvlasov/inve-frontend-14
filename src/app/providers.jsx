"use client";

import { ToastrProvider } from "@/components/Toastr/ToastrProvider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { YandexMetrica } from "@/components/YandexMetrica";
import messages from "@/locales/ru/common.json";
import { NextIntlClientProvider } from "next-intl";
import Script from "next/script";

export default function Providers({ children, global }) {
  // global here is global.attributes from Strapi (or undefined/null)
  const siteKey = global?.CAPTCHA_SITE_KEY;
  //console.log(siteKey);

  return (
    <YandexMetrica>
      <NextIntlClientProvider locale='ru' messages={messages} timeZone='Europe/Moscow'>
        <ToastrProvider>
          <Script src='//cdn.callibri.ru/callibri.js' type='text/javascript' strategy='beforeInteractive' />
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
              {children}
            </GoogleReCaptchaProvider>
          ) : (
            // If key is missing, don't break the app
            children
          )}
        </ToastrProvider>
      </NextIntlClientProvider>
    </YandexMetrica>
  );
}
