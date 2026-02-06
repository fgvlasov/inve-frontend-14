import { fetchAPI } from "@/lib/api";
import AboutView from "./AboutView";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateMetadata() {
  const [data, global] = await Promise.all([
    getAboutData(DEFAULT_LOCALE),
    getGlobal(DEFAULT_LOCALE),
  ]);
  const seo = data.about?.attributes?.Seo;
  const pageSeo = seo
    ? { metaTitle: seo.metaTitle, metaDescription: seo.metaDescription }
    : null;
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

async function getAboutData(locale: string) {
  const [headerRes, contactRes, menuRes, aboutRes, projectsRes, blogRes, slidesRes] = await Promise.all([
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
    fetchAPI("/about", {
      populate: "*",
      locale,
    }),
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      populate: {
        Poster: "*",
        tags: "*",
      },
      locale,
      fields: ["title", "slug"],
      pagination: {
        start: 0,
        limit: 6,
      },
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tag", "Image_preview"],
      locale,
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
    about: aboutRes.data,
    projects: projectsRes.data,
    blogs: blogRes.data,
    slides: slidesRes.data ?? [],
  };
}

export default async function AboutPage() {
  const { about, projects, blogs, data, menu, headerMenu, slides } = await getAboutData(DEFAULT_LOCALE);

  return (
    <AboutView
      about={about}
      projects={projects}
      blogs={blogs}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
      slides={slides}
    />
  );
}
