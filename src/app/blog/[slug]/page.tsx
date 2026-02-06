import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import Line from "@/components/ui/Line";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroNews from "@/components/News/IntroNews";
import CarouselNews from "@/components/News/CarouselNews";
import QuoteBlock from "@/components/News/QuoteBlock";
import ReactMarkdown from "react-markdown";
import LoadFileBlock from "@/components/News/LoadFileBlock";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Video from "@/components/Projects/Video";
import { fetchAPI } from "@/lib/api";
import { getGlobal, buildMetadata } from "@/lib/metadata";
import BlogSlugView from "./BlogSlugView";

const DEFAULT_LOCALE = "ru";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogsRes = await fetchAPI("/blogs", {
    fields: ["slug"],
    pagination: { pageSize: 100 },
  });
  return (blogsRes.data ?? []).map((blog: { attributes: { slug: string } }) => ({
    slug: blog.attributes.slug,
  }));
}

async function getBlogData(slug: string) {
  const [headerRes, contactRes, menuRes, matchingBlogs, blogsOthersRes] = await Promise.all([
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
    fetchAPI("/blogs", {
      filters: { slug },
      locale: DEFAULT_LOCALE,
      publicationState: "live",
      populate: "*",
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tag", "Image_preview"],
      pagination: { start: 0, limit: 3 },
      publicationState: "live",
      locale: DEFAULT_LOCALE,
    }),
  ]);

  const blog = matchingBlogs.data?.length > 0 ? matchingBlogs.data[0] : null;
  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    blog,
    blogsOthers: blogsOthersRes.data ?? [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getBlogData(slug);
  if (!data.blog) return {};
  const global = await getGlobal(DEFAULT_LOCALE);
  const pageSeo = {
    metaTitle: data.blog.attributes.Title,
    metaDescription: data.blog.attributes.Text,
    shareImage: data.blog.attributes.Image_preview,
  };
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { blog, blogsOthers, data, menu, headerMenu } = await getBlogData(slug);

  if (!blog) notFound();

  return (
    <BlogSlugView
      blog={blog}
      blogsOthers={blogsOthers}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
    />
  );
}
