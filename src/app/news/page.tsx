import { fetchAPI } from "@/lib/api";
import NewsView from "./NewsView";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateMetadata() {
  const global = await getGlobal(DEFAULT_LOCALE);
  return buildMetadata(null, global?.attributes ?? undefined);
}

async function getNewsData(locale: string) {
  const [headerRes, contactRes, menuRes, blogsRes] = await Promise.all([
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
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview", "Weight"],
      locale,
      populate: {
        Image_preview: "*",
        tag: "*",
      },
      sort: "Weight:asc",
      pagination: {
        start: 0,
        limit: 6,
      },
    }),
  ]);

  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    news: blogsRes.data,
  };
}

export default async function NewsPage() {
  const { news, data, menu, headerMenu } = await getNewsData(DEFAULT_LOCALE);

  return (
    <NewsView
      news={news}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
    />
  );
}
