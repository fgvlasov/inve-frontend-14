import useTranslation from "next-translate/useTranslation";
import PillowLink from "./PillowLink";

export default function IntroError() {
  const { t } = useTranslation("common");
  return (
    <div
      className="container py-15
      md:pt-25 md:pb-20
      lg:pt-20 lg:pb-34"
    >
      <div
        className="w-full bg-[url('/image/404_bg_mini.jpg')] bg-no-repeat bg-cover pt-[76px] pb-10 px-10 rounded-5xl 
        md:bg-[url('/image/404_bg.jpg')] bg-center min-h-[463px] text-white mx-auto
    md:pb-33  md:min-h-[600px] md:pt-[88px]  md:border-eclipse md:border-2
    lg:px-21 lg:pt-29 lg:pb-20"
      >
        <div
          className="flex flex-col
        md:flex-row flex-wrap
        lg:max-w-[630px]"
        >
          <h3
            className="text-7xl font-black -tracking-[2.8px] mb-3.8
           md:text-9xl md:pl-3.8 md:mb-0
           lg:pl-0
           "
          >
            404
          </h3>
          <p
            className="text-xl pr-6 w-3/4 mb-7
      md:text-3xl md:mb-0 md:w-[47%] md:ml-auto md:mr-4.5 md:mt-[66px]"
          >
            Страницы с таким URL не существует
          </p>
          <div
            className="flex flex-col gap-2
        md:flex-row md:pt-24.5
        lg:pt-25"
          >
            <PillowLink
              text="Вернуться на главную"
              link="/"
              variantSvg="blueSvg"
              variant="white"
            ></PillowLink>
            <PillowLink
              text="Заполнить бриф"
              link="/brief"
              variantSvg="darkSvg"
              variant="white"
            ></PillowLink>
          </div>
        </div>
      </div>
    </div>
  );
}
