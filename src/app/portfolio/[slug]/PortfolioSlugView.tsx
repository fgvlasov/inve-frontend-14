"use client";

import { useTranslations } from "next-intl";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import Line from "@/components/ui/Line";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ProjectsListPortfolio from "@/components/Projects/ProjectsListPortfolio";

interface PortfolioSlugViewProps {
  tag: { attributes: Record<string, unknown> };
  projects: unknown[];
  categories: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
}

export default function PortfolioSlugView({ tag, projects, categories, data, menu, headerMenu }: PortfolioSlugViewProps) {
  const t = useTranslations();

  const breadCrumbsItems = [{ title: t("All_projects"), path: "/portfolio" }, { title: tag.attributes.Name as string }];

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg='white'
      headerBg='white'
      footerBg='black'
      pillowColor='dark'
      variantSvg='darkSvg'
    >
      <TitleSection text={tag.attributes.Name as string}>
        <span className='text-4xl tracking-tight     md:text-6xl text-blue'>#</span>
      </TitleSection>
      <Line variantColor='grey' />
      <BreadCrumbs links={breadCrumbsItems} />
      <ProjectsListPortfolio projects={projects} categories={categories} tag={tag.attributes.Name as string} />
    </Layout>
  );
}
