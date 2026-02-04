import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const useEnquiryForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const checkUser = async () => {
    if (!executeRecaptcha) {
      return false;
    }
    try {
      const gReCaptchaToken = await executeRecaptcha("enquiryFormSubmit");
      const result = submitEnquiryForm(gReCaptchaToken);
      return result;
    } catch (error) {
      return false;
    }
  };

  const submitEnquiryForm = async (gReCaptchaToken) => {
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gRecaptchaToken: gReCaptchaToken,
        }),
      });
      const json = await res.json();
      if (json?.status === "success") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };
  return checkUser;
};
