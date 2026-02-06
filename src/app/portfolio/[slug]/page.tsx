import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import { getGlobal, buildMetadata } from "@/lib/metadata";
import PortfolioSlugView from "./PortfolioSlugView";

const DEFAULT_LOCALE = "ru";

export const revalidate = 3600;

export async function generateStaticParams() {
  const tagsRes = await fetchAPI("/tags", { fields: ["slug"] });
  return (tagsRes.data ?? []).map((tag: { attributes: { slug: string } }) => ({
    slug: tag.attributes.slug,
  }));
}

async function getPortfolioSlugData(slug: string) {
  const [
    headerRes,
    contactRes,
    menuRes,
    projectsRes,
    categoriesRes,
    matchingTags,
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
    fetchAPI("/projects", {
      sort: ["ListPosition:asc"],
      locale: DEFAULT_LOCALE,
      populate: ["Poster", "tags", "categories"],
      fields: ["Title", "slug"],
      filters: { tags: { slug: { $eq: slug } } },
    }),
    fetchAPI("/categories", {
      fields: ["name", "slug"],
      locale: DEFAULT_LOCALE,
      populate: ["projects"],
    }),
    fetchAPI("/tags", {
      populate: "*",
      locale: DEFAULT_LOCALE,
      filters: { slug },
    }),
  ]);

  const tag = matchingTags?.data?.[0] ?? null;
  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    tag,
    categories: categoriesRes.data ?? [],
    projects: projectsRes.data ?? [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPortfolioSlugData(slug);
  if (!data.tag) return {};
  const global = await getGlobal(DEFAULT_LOCALE);
  const pageSeo = {
    metaTitle: data.tag.attributes.Name,
    metaDescription: data.tag.attributes.Text,
    shareImage: data.tag.attributes.Image_preview,
  };
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

export default async function PortfolioSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { tag, projects, categories, data, menu, headerMenu } =
    await getPortfolioSlugData(slug);

  if (!tag) notFound();

  return (
    <PortfolioSlugView
      tag={tag}
      projects={projects}
      categories={categories}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
    />
  );
}
