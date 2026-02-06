"use client";

import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout";
import IntroCost from "@/components/ui/IntroCost";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ProjectsList from "@/components/Projects/ProjectsList";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Wrapper from "@/components/ui/Wrapper";
import Line from "@/components/ui/Line";
import AboutIntro from "@/components/About/AboutIntro";
import ProjectsTitle from "@/components/Projects/ProjectsTitle";

interface AboutViewProps {
  about: { attributes: Record<string, unknown> };
  projects: [];
  blogs: [];
  data: { attributes: Record<string, unknown> };
  menu: [];
  headerMenu: [];
  slides?: [];
}

export default function AboutView({ about, projects, blogs, data, menu, headerMenu, slides = [] }: AboutViewProps) {
  const { t } = useTranslation("common");

  return (
    <Layout
      headerContact={data.attributes}
      data={data}
      menu={menu}
      header={headerMenu}
      bg='black'
      headerBg='white'
      footerBg='black'
      pillowColor='dark'
      variantSvg='darkSvg'
    >
      <Wrapper color='grey'>
        <TitleSection text={about.attributes.Title as string}> </TitleSection>
        <div className='container'>
          <Line variantColor='grey' />
        </div>
        <BreadCrumbs
          links={[
            {
              title: about.attributes.Title as string,
              path: "",
              active: false,
            },
          ]}
        />

        <AboutIntro
          title1={about.attributes.Title as string}
          text1={about.attributes.AboutPurpose as string}
          title2={t("about.aboutOpportunities")}
          text2={about.attributes.AboutOpportunities as string}
          slides={slides}
        />
        <IntroCost />
        <div className='container py-10 lg:pt-15'>
          <ProjectsTitle />
          <Line width='full' />
        </div>
        <ProjectsList moreProjects={true} projects={projects} />
      </Wrapper>
      <BlogsBlockList articleColor='nero' titleColor='white' buttonColor='white' blogRes={blogs} />
    </Layout>
  );
}
