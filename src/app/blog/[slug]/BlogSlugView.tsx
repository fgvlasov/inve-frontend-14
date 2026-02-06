"use client";

import useTranslation from "next-translate/useTranslation";
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

interface BlogSlugViewProps {
  blog: { attributes: Record<string, unknown> };
  blogsOthers: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
}

export default function BlogSlugView({
  blog,
  blogsOthers,
  data,
  menu,
  headerMenu,
}: BlogSlugViewProps) {
  const { t } = useTranslation("common");

  const breadCrumbsItems = [
    { title: t("All_news"), path: "/news" },
    { title: blog.attributes.Title as string },
  ];

  return (
    <Layout
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor=""
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
    >
      <TitleSection text={blog.attributes.Title as string} />
      <Line variantColor="grey" />
      <BreadCrumbs links={breadCrumbsItems} />
      <IntroNews blog={blog} />
      {blog.attributes.Text && (
        <div className=" container pt-12 !max-w-screen-lg markDown opacityMarkdown">
        <ReactMarkdown >
          {(blog.attributes.Text as string)}
        </ReactMarkdown>
        </div>
      )}

      {blog.attributes.Advertise && (
        <div className="container pt-12 !max-w-screen-lg markDown opacityMarkdown">
          <ReactMarkdown>
            {(blog.attributes.Advertise as string)}
          </ReactMarkdown>
        </div>
      )}
      {blog.attributes.PhotoSlides && (
        <CarouselNews slides={blog.attributes.PhotoSlides as unknown[]} blog={blog} />
      )}
      {blog.attributes.Text2 && (
        <div className=" container pt-12 !max-w-screen-lg markDown opacityMarkdown">
        <ReactMarkdown >
          {(blog.attributes.Text2 as string)}
        </ReactMarkdown>
        </div>
      )}
      {(blog.attributes.File as { data?: unknown })?.data && (
        <LoadFileBlock file={(blog.attributes.File as { data: unknown }).data} />
      )}
      {blog.attributes.Quote && (
        <QuoteBlock quote={blog.attributes.Quote as Record<string, unknown>} />
      )}

      {(blog.attributes.Video as { data?: unknown })?.data && (
        <div className="pt-[52px]">
          <Video
            poster={blog.attributes.Poster}
            videofile={blog.attributes.Video}
          />
        </div>
      )}

      {blog.attributes.Text3 && (
        <div className=" container pt-12 !max-w-screen-lg markDown opacityMarkdown">
          <ReactMarkdown>
          {(blog.attributes.Text3 as string)}
        </ReactMarkdown>
        </div>
      )}
      <BlogsBlockList
        articleColor="inherit"
        titleColor="black"
        buttonColor="black"
        blogRes={blogsOthers}
        titleOthers={true}
      />
      <Line variantColor="grey" />
    </Layout>
  );
}
