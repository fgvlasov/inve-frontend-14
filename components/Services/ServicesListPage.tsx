import ServiceItem from "@/components/ui/ServiceItem";
import Loading from "../ui/Loading";
import { fetchAPI } from "@/lib/api";
import BriefCost from "../ui/BriefCost";

export const revalidate = 3600;

type StrapiService = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    textPart1?: string;
    textPart2?: string;
    textPart3?: string;
    textPart4?: string;
    image?: string;
  };
};

type Props = {
  services: StrapiService[];
};

export default async function ServicesListPage({ services }: Props) {
  const locale = "ru";
  let data: StrapiService | null = null;

  try {
    const serviceRes = await fetchAPI("/categories", {
      fields: ["name", "slug", "textPart1", "textPart2", "textPart3", "textPart4"],
      locale,
      populate: ["image"],
      filters: {
        id: { $eq: 11 },
      },
      pagination: { start: 0, limit: 1 },
    });

    data = (serviceRes?.data?.[0] ?? null) as StrapiService | null;
  } catch {
    data = null;
  }

  if (!services || !data) {
    return <Loading />;
  }

  return (
    <section
      className='container pt-10 pb-11
      md:pb-[106px] md:pt-20
      lg:pb-34'
    >
      <div className='lg:flex pb-10'>
        {services.map((service, i) => (
          <ServiceItem
            key={service.id ?? i}
            title={service.attributes.name}
            subtitle=''
            link={`/services/${service.attributes.slug}`}
            textPart1={service.attributes.textPart1}
            textPart2={service.attributes.textPart2}
            textPart3={service.attributes.textPart3}
            textPart4={service.attributes.textPart4}
            image={service.attributes.image}
            centered={false}
          />
        ))}
      </div>

      <div className='lg:grid grid-cols-3'>
        <ServiceItem
          title={data.attributes.name}
          subtitle=''
          link={`/services/${data.attributes.slug}`}
          textPart1={data.attributes.textPart1}
          textPart2={data.attributes.textPart2}
          textPart3={data.attributes.textPart3}
          textPart4={data.attributes.textPart4}
          image={data.attributes.image}
          centered={true}
        />

        <BriefCost title='Заполните бриф' />
      </div>
    </section>
  );
}
