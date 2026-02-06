"use client";

import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import ProjectsListPortfolio from "@/components/Projects/ProjectsListPortfolio";
import Line from "@/components/ui/Line";
import Wrapper from "@/components/ui/Wrapper";
import ServicesSlides from "@/components/Services/ServicesSlides";

interface PortfolioViewProps {
  projects: [];
  categories: [];
  blogs: [];
  data: { attributes: Record<string, unknown> };
  menu: [];
  headerMenu: [];
  slides?: [];
}

export default function PortfolioView({ projects, categories, blogs, data, menu, headerMenu, slides = [] }: PortfolioViewProps) {
  const { t } = useTranslation("common");

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg='black'
      headerBg='white'
      footerBg='black'
      pillowColor='dark'
      variantSvg='darkSvg'
    >
      <Wrapper color='grey'>
        <TitleSection text={t("works.title")}> </TitleSection>
        <div className='container'>
          <Line variantColor='grey' />
        </div>
        <BreadCrumbs
          links={[
            {
              title: t("works.title"),
              path: "",
              active: false,
            },
          ]}
        />
        <ProjectsListPortfolio projects={projects} categories={categories} />
      </Wrapper>
      <div className='pt-2.5 md:pt-10 lg:pt-25'>
        <div className='container'>
          <ServicesSlides slides={slides} />
        </div>
        <IntroCost />
      </div>

      <BlogsBlockList articleColor='nero' titleColor='white' buttonColor='white' blogRes={blogs} />
    </Layout>
  );
}
