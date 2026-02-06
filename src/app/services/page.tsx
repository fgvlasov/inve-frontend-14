import { fetchAPI } from "@/lib/api";
import ServicesView from "./ServicesView";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateMetadata() {
  const global = await getGlobal(DEFAULT_LOCALE);
  return buildMetadata(null, global?.attributes ?? undefined);
}

async function getServicesData(locale: string) {
  const [headerRes, contactRes, menuRes, servicesRes, projectsRes, slidesRes] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale,
      populate: "ContactSocials",
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale,
    }),
    fetchAPI("/categories", {
      populate: "*",
      fields: [
        "name",
        "slug",
        "textPart1",
        "textPart2",
        "textPart3",
        "textPart4",
      ],
      locale,
      filters: {
        ShowOnMainPage: true,
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    }),
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: ["Poster", "tags"],
      fields: ["Title", "slug"],
      locale,
      filters: {
        ShowOnMainPage: true,
      },
      pagination: {
        start: 0,
        limit: 3,
      },
    }),
    fetchAPI("/categories", {
      filters: { ShowAsSlide: true },
      fields: ["name", "slug"],
      locale,
      populate: {
        Slides: { sort: ["SlidePosition:asc"], populate: "*" },
      },
    }),
  ]);

  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    services: servicesRes.data,
    projects: projectsRes.data,
    slides: slidesRes.data ?? [],
  };
}

export default async function ServicesPage() {
  const { services, projects, data, menu, headerMenu, slides } = await getServicesData(DEFAULT_LOCALE);

  return (
    <ServicesView
      services={services}
      projects={projects}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
      slides={slides}
    />
  );
}
