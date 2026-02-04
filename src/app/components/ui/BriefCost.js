import useTranslation from "next-translate/useTranslation";
import PillowLink from "./PillowLink";

export default function BriefCost({ title }) {
  const { t } = useTranslation("common");
  return (
    <div
      className="py-6
      md:py-5
      lg:py-0 lg:col-span-2 lg:ml-7"
    >
      <div
        className="  w-full 
		pt-10 pb-10 px-10 md:pb-33 lg:px-10 rounded-5xl 
		 min-h-[463px] text-white mx-auto
    	flex flex-col justify-between md:justify-start lg:h-full 
		border border-gray-300/50
		bgBriefCost  bg-no-repeat bg-[url('/image/brif_uslugi.png')] bg-center"
        style={{ backgroundPosition: "center" }}
      >
        <h3
          className="text-4xl tracking-tight md:w-9/12 mb-10
      lg:text-5xl font-arial
      lg:mb-7"
        >
          {title}
        </h3>
        <p
          className="pr-6 w-full mb-auto pb-5 max-w-[450px]
      md:text-xl md:pr-0 md:mb-0 md:pb-25
      "
        >
          {t("brief.order_1")}
          <br />
          {t("brief.order_2")}
        </p>
        <PillowLink
          text={t("brief.fill")}
          link="/brief"
          variantSvg="blueSvg"
          variant="white"
        ></PillowLink>
      </div>
    </div>
  );
}
