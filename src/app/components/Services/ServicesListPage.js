import ServiceItem from "@/components/ui/ServiceItem";
import useTranslation from "next-translate/useTranslation";
import Loading from "../ui/Loading";
import { useEffect, useState } from "react";
import { fetchAPI } from "lib/api";
import BriefCost from "../ui/BriefCost";

export default function ServicesListPage({ services }) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const serviceRes = await fetchAPI("/categories", {
        fields: [
          "name",
          "slug",
          "textPart1",
          "textPart2",
          "textPart3",
          "textPart4",
        ],
        locale: locale,
        populate: ["image"],
        filters: {
          id: {
            $eq: 11,
          },
        },
      });

      setData(serviceRes.data[0]);
    }
    fetchData();
  }, [locale]);

  if (!data || !services) {
    return <Loading />;
  }

  return (
    <section
      className="container pt-10 pb-11
    md:pb-[106px] md:pt-20 
    lg:pb-34"
    >
      <div className="lg:flex pb-10">
        {services.map((service, i) => (
          <ServiceItem
            key={i}
            title={service.attributes.name}
            subtitle=""
            link={`${i18n.lang}/services/${service.attributes.slug}`}
            textPart1={service.attributes.textPart1}
            textPart2={service.attributes.textPart2}
            textPart3={service.attributes.textPart3}
            textPart4={service.attributes.textPart4}
            image={service.attributes.image}
            centered={false}
          />
        ))}
      </div>
      <div className="lg:grid grid-cols-3">
        <ServiceItem
          title={data.attributes.name}
          subtitle=""
          link={`/services/${data.attributes.slug}`}
          textPart1={data.attributes.textPart1}
          textPart2={data.attributes.textPart2}
          textPart3={data.attributes.textPart3}
          textPart4={data.attributes.textPart4}
          image={data.attributes.image}
          centered={true}
        />
        <BriefCost title={t("brief.services_list_title")} />
      </div>
    </section>
  );
}
