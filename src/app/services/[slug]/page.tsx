import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import { getGlobal, buildMetadata } from "@/lib/metadata";
import ServiceSlugView from "./ServiceSlugView";

const DEFAULT_LOCALE = "ru";

export const revalidate = 3600;

export async function generateStaticParams() {
  const categoriesRes = await fetchAPI("/categories", {
    fields: ["slug"],
  });
  return (categoriesRes.data ?? []).map(
    (category: { attributes: { slug: string | null } }) => ({
      slug: category.attributes.slug != null ? String(category.attributes.slug) : "",
    })
  );
}

async function getServiceData(slug: string) {
  const [
    headerRes,
    contactRes,
    menuRes,
    threeCategoriesRes,
    matchingCategories,
    projectsRes,
    slidesRes,
  ] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale: DEFAULT_LOCALE,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale: DEFAULT_LOCALE,
      populate: "ContactSocials",
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale: DEFAULT_LOCALE,
    }),
    fetchAPI("/categories", {
      populate: ["image"],
      fields: ["name", "slug", "textPart1", "textPart2"],
      locale: DEFAULT_LOCALE,
      publicationState: "live",
      filters: { slug: { $ne: slug } },
      pagination: { start: 0, limit: 3 },
    }),
    fetchAPI("/categories", {
      locale: DEFAULT_LOCALE,
      populate: {
        Category_advantages: { populate: "*" },
        Category_project_price: { populate: "*" },
        Category_workplan: { populate: "*" },
        Category_why_choose: { populate: "*" },
        Category_other_services: { populate: "*" },
        Service_consultation: { populate: "*" },
        SEO: { populate: "*" },
        image: { populate: "*" },
        Service_video: { populate: "*" },
        What_is: { populate: "*" },
      },
      filters: { slug },
    }),
    fetchAPI("/projects", {
      fields: ["Title", "slug"],
      locale: DEFAULT_LOCALE,
      populate: ["Poster", "tags"],
      publicationState: "live",
      filters: { categories: { slug: { $eq: slug } } },
    }),
    fetchAPI("/categories", {
      filters: { ShowAsSlide: true },
      fields: ["name", "slug"],
      locale: DEFAULT_LOCALE,
      populate: {
        Slides: { sort: ["SlidePosition:asc"], populate: "*" },
      },
    }),
  ]);

  const category = matchingCategories.data?.[0] ?? null;
  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    threeCategories: threeCategoriesRes.data ?? [],
    category,
    projects: projectsRes.data ?? [],
    slides: slidesRes.data ?? [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getServiceData(slug);
  if (!data.category) return {};
  const global = await getGlobal(DEFAULT_LOCALE);
  const seoArr = data.category.attributes?.SEO as Array<{ metaTitle?: string; metaDescription?: string }> | undefined;
  const pageSeo =
    seoArr?.[0] ?
      {
        metaTitle: seoArr[0].metaTitle,
        metaDescription: seoArr[0].metaDescription,
        shareImage: data.category.attributes.image,
      }
    : null;
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const {
    category,
    projects,
    threeCategories,
    data,
    menu,
    headerMenu,
    slides,
  } = await getServiceData(slug);

  if (!category) notFound();

  return (
    <ServiceSlugView
      category={category}
      projects={projects}
      threeCategories={threeCategories}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
      slides={slides}
    />
  );
}
