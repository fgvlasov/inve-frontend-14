import Title from "@/components/ui/Title";
import ServiceItem from "@/components/ui/ServiceItem";
import PillowLink from "@/components/ui/PillowLink";
import FormService from "@/components/ui/FormService";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { fetchAPI } from "lib/api";
import Loading from "../ui/Loading";

export default function ServicesList() {
  const [data, setData] = useState();
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const servicesRes = await fetchAPI("/categories", {
        populate: "*",
        fields: ["name", "slug"],
        locale: locale,
      });

      setData(servicesRes.data);
    }
    fetchData();
  }, [locale]);

  if (!data) {
    return <Loading />;
  }

  return (
    <section
      className="px-4 pt-10 pb-11
    -mt-50 
    md:pb-[106px] md:border-t-1 border-eclipse md:pt-20 
    lg:px-10 lg:pb-34
    xl:px-20"
    >
      <div className="flex items-center pb-15 md:pb-9 lg:mb-24.5">
        <svg className="mr-5" width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M13.125 30L13.125 -1.63918e-07L16.875
           0L16.875 30L13.125 30Z"
            fill="#4574EF"
          />
          <path
            d="M3.27835e-07 13.125L30 13.125L30 16.875L0 16.875L3.27835e-07 13.125Z"
            fill="#4574EF"
          />
          <path
            d="M3.06874 24.2808L24.2819 3.06759L26.9336 5.71924L5.72039 26.9324L3.06874 24.2808Z"
            fill="#4574EF"
          />
          <path
            d="M24.2803 26.9325L3.0671 5.71928L5.71875 3.06763L26.932 24.2808L24.2803 26.9325Z"
            fill="#4574EF"
          />
          <path
            d="M24.2803 26.9325L3.0671 5.71928L5.71875 3.06763L26.932 24.2808L24.2803 26.9325Z"
            fill="#4574EF"
          />
        </svg>
        <Title text={t("services.mainServices")} />
        <div className="hidden lg:block ml-auto">
          <PillowLink
            text={t("services.allServices")}
            link={`/services`}
            variant="dark"
            variantSvg="whiteSvg"
          />
        </div>
      </div>

      <div className="lg:flex">
        {data.map((service, i) => (
          <ServiceItem
            key={i}
            title={service.attributes.name}
            subtitle=""
            link={`/services/${service.attributes.slug}`}
            descriptionItem1={service.attributes.text}
            image={service.attributes.image}
          />
        ))}
      </div>
      <FormService />
    </section>
  );
}
