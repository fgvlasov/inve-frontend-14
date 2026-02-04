import { useEffect, useState } from "react";
import ServiceChildrenItem from "./ServicesChildrenItem";
import useTranslation from "next-translate/useTranslation";
import { fetchAPI } from "lib/api";
import Loading from "../ui/Loading";

export default function ServicesChildren({ parent }) {
  const [data, setData] = useState();
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const servicesRes = await fetchAPI("/categories", {
        locale: locale,
        populate: ["category", "image"],
        filters: {
          category: {
            id: {
              $eq: parent,
            },
          },
        },
        pagination: {
          start: 0,
          limit: 3,
        },
      });

      setData(servicesRes.data);
    }
    fetchData();
  }, [locale, parent]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="container">
      {data[0] &&
        data.map((service, key) => (
          <ServiceChildrenItem
            key={key}
            title={service.attributes.name}
            path={service.attributes.slug}
            image={service.attributes.image}
          />
        ))}
    </div>
  );
}
