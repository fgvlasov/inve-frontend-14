import { fetchAPI } from "@/lib/api";
import BriefView from "./BriefView";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateMetadata() {
  const [data, global] = await Promise.all([
    getBriefData(DEFAULT_LOCALE),
    getGlobal(DEFAULT_LOCALE),
  ]);
  const seo = data.seoBrief?.attributes?.SeoBrief;
  const pageSeo = seo
    ? { metaTitle: seo.metaTitle, metaDescription: seo.metaDescription }
    : null;
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

async function getBriefData(locale: string) {
  const [
    headerRes,
    contactRes,
    menuRes,
    categoriesRes,
    visobjRes,
    seoBriefRes,
  ] = await Promise.all([
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
      fields: ["name", "slug"],
      filters: { id: { $notIn: [13, 14] } },
      locale,
    }),
    fetchAPI("/visualization-objects", {
      populate: "*",
      locale,
    }),
    fetchAPI("/about", {
      fields: ["Title"],
      populate: ["SeoBrief"],
      locale,
    }),
  ]);

  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    categories: categoriesRes.data,
    visobjs: visobjRes.data,
    seoBrief: seoBriefRes.data,
  };
}

export default async function BriefPage() {
  const { categories, visobjs, data, menu, headerMenu } = await getBriefData(DEFAULT_LOCALE);

  return (
    <BriefView
      categories={categories}
      visobjs={visobjs}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
    />
  );
}
