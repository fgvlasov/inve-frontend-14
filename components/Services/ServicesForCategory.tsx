import ServiceChildrenItem from "./ServicesChildrenItem";
import { fetchAPI } from "@/lib/api";
import Loading from "../ui/Loading";

export const revalidate = 3600;

type StrapiEntity<T> = {
  id: number;
  attributes: T;
};

type ServiceAttributes = {
  Title?: string;
  slug?: string;
  Image?: unknown;
  category_brief?: { data?: { id?: number } | null };
  direction_brief?: { data?: { id?: number } | null };
};

export default async function ServicesForCategory({ parent }: { parent: number }) {
  const locale = "ru";

  let data: Array<StrapiEntity<ServiceAttributes>> | null = null;

  try {
    const servicesRes = await fetchAPI("/services", {
      locale,
      fields: ["Title", "slug"],
      populate: ["Image", "category_brief", "direction_brief"],
      filters: {
        categories: {
          id: { $eq: parent },
        },
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    });

    data = (servicesRes?.data ?? null) as Array<StrapiEntity<ServiceAttributes>> | null;
  } catch {
    data = null;
  }

  if (!data) return <Loading />;
  if (data.length === 0) return null;

  return (
    <div className='container md:flex flex-row md:overflow-hidden md:pb-5'>
      <div
        className='flex flex-col gap-2.5 py-6 md:flex-row md:overflow-hidden
        lg:order-3 lg:w-full'
      >
        {data.map((service) => {
          const attrs = service.attributes;

          const pathCategory = attrs.category_brief?.data?.id ?? "";
          const pathDirection = attrs.direction_brief?.data?.id ?? "";

          return (
            <ServiceChildrenItem
              key={service.id}
              serviceId={parent}
              title={attrs.Title ?? ""}
              pathCategory={pathCategory != null ? String(pathCategory) : ""}
              pathDirection={pathDirection != null ? String(pathDirection) : ""}
              image={attrs.Image}
            />
          );
        })}
      </div>
    </div>
  );
}
