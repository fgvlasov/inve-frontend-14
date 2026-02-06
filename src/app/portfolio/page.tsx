import { fetchAPI } from "@/lib/api";
import PortfolioView from "./PortfolioView";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateMetadata() {
  const global = await getGlobal(DEFAULT_LOCALE);
  return buildMetadata(null, global?.attributes ?? undefined);
}

async function getPortfolioData(locale: string) {
  const [headerRes, contactRes, menuRes, projectsRes, categoriesRes, blogRes, slidesRes] = await Promise.all([
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
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: ["Poster", "tags", "categories", "rtVideos.poster"],
      fields: ["Title", "slug"],
      pagination: {
        pageSize: 100,
      },
      locale,
      publicationState: "live",
    }),
    fetchAPI("/categories", {
      fields: ["name", "slug"],
      populate: ["projects"],
      locale,
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tag", "Image_preview"],
      locale,
      publicationState: "live",
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
    categories: categoriesRes.data,
    projects: projectsRes.data,
    blogs: blogRes.data,
    slides: slidesRes.data ?? [],
  };
}

export default async function PortfolioPage() {
  const { projects, categories, blogs, data, menu, headerMenu, slides } = await getPortfolioData(DEFAULT_LOCALE);

  return (
    <PortfolioView
      projects={projects}
      categories={categories}
      blogs={blogs}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
      slides={slides}
    />
  );
}
