import { fetchAPI } from "lib/api";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Marquee() {
  const [data, setData] = useState();
  const i18n = useTranslation();
  const locale = i18n.lang;

  useEffect(() => {
    async function fetchData() {
      const marqueeRes = await fetchAPI("/global", {
        locale: locale,
        populate: {
          Marquee: {
            populate: "*",
          },
        },
      });

      setData(marqueeRes.data.attributes.Marquee);
    }
    fetchData();
  }, [locale]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="relative flex overflow-x-hidden">
      <div
        className="py-12 animate-marquee whitespace-nowrap text-6xl tracking-tight text-black-russian
      md:text-7xl md:py-10
      lg:text-10xl"
      >
        <span className="mx-4">{data.Text1}</span>
        <span className="mx-4 text-blue">/</span>
        <span className="mx-4">{data.Text2}</span>
        <span className="mx-4  text-blue">/</span>
        <span className="mx-4">{data.Text3}</span>
        <span className="mx-4  text-blue">/</span>
      </div>
      <div
        className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-6xl tracking-tight text-black-russian
      md:text-7xl md:py-10
      lg:text-10xl"
      >
        <span className="mx-4">{data.Text1}</span>
        <span className="mx-4 text-blue">/</span>
        <span className="mx-4">{data.Text2}</span>
        <span className="mx-4  text-blue">/</span>
        <span className="mx-4">{data.Text3}</span>
        <span className="mx-4  text-blue">/</span>
      </div>
    </div>
  );
}
