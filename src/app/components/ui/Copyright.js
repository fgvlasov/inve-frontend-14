import useTranslation from "next-translate/useTranslation";
import Logo from "./Logo";

export default function Copyright() {
  const { t } = useTranslation("common");
  return (
    <div
      className="pt-10.5 text-sm flex items-end 
    justify-between flex-wrap text-inherit
    md:pt-[64px] md:items-baseline
    lg:w-full lg:pt-1.5"
    >
      <div className="w-full lg:hidden">
        <Logo color="inherit" />
      </div>
      <p
        className="pt-6 pb-5 block w-full opacity-50 md:w-auto
      md:mb-0"
      >
        2024 &copy; invert.studio
      </p>
      <a href="/confidence" className="underline decoration-1 opacity-50">
        {t("confidence_policy")}
      </a>
      <a href="https://web-dev-studio.ru">
        <p className="hidden lg:block">
          Design by <b>Web Devil Studio</b>
        </p>
        <div className="lg:hidden">
          <picture>
            <img
              width="80"
              height="35"
              src="/image/svg/wds-logo.svg"
              alt="Design by Web Devil Studio"
            />
          </picture>
        </div>
      </a>
    </div>
  );
}
