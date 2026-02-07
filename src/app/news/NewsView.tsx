"use client";

import { useTranslations } from "next-intl";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";
import NewsList from "@/components/News/NewsList";
import IntroCost from "@/components/ui/IntroCost";

interface NewsViewProps {
  news: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
}

export default function NewsView({ news, data, menu, headerMenu }: NewsViewProps) {
  const t = useTranslations();

  const breadCrumbsItems = [
    {
      title: t("news.company_news"),
    },
  ];

  return (
    <Layout
      bg='white'
      headerBg='white'
      footerBg='white'
      pillowColor=''
      headerContact={data.attributes}
      data={data}
      menu={menu}
      header={headerMenu}
    >
      <TitleSection text={t("news.company_news")}> </TitleSection>
      <div className='container'>
        <Line variantColor='grey' />
      </div>
      <BreadCrumbs links={breadCrumbsItems} />
      <NewsList news={news} />
      <IntroCost />
      <div className='container'>
        <Line variantColor='grey' />
      </div>
    </Layout>
  );
}
