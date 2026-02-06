"use client";

import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import TagBlock from "@/components/Projects/TagBlock";
import Line from "@/components/ui/Line";
import ProjectCarousel from "@/components/Projects/ProjectCarousel";
import ProjectAbout from "@/components/Projects/ProjectAbout";
import IntroCost from "@/components/ui/IntroCost";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";

interface ProjectSlugViewProps {
  project: { attributes: Record<string, unknown> };
  projectsOther: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
}

export default function ProjectSlugView({
  project,
  projectsOther,
  data,
  menu,
  headerMenu,
}: ProjectSlugViewProps) {
  const { t } = useTranslation("common");

  const tags = (project.attributes.tags as { data?: unknown[] })?.data;
  const breadCrumbsItems = [
    { title: t("works.title"), path: "/portfolio" },
    { title: project.attributes.Title as string },
  ];

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor="white"
      variantSvg="darkSvg"
    >
      <TitleSection text={project.attributes.Title as string} />
      {tags?.[0] && <TagBlock tags={tags} />}
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs links={breadCrumbsItems} />
      <ProjectCarousel
        photos={(project.attributes.ProjectSliderFotos as { data?: unknown[] })?.data}
        poster={project.attributes.Poster}
        videoFiles={project.attributes.VideoFile}
        rtVideos={project.attributes.rtVideos}
      />
      <ProjectAbout
        task={project.attributes.ProjectTask as string}
        done={project.attributes.ProjectDone as string}
        CustomerName={project.attributes.CustomerName as string}
        CustomerUrl={project.attributes.CustomerUrl as string}
      />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <div className="py-10 md:py-15 lg:py-18">
        <IntroCost />
      </div>
      <PortfolioCarousel
        title={t("project.other_projects")}
        projects={projectsOther}
      />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      {project.attributes.Iframe_mod && (
        <div className="container hidden">
          <div
            dangerouslySetInnerHTML={{
              __html: project.attributes.Iframe_mod as string,
            }}
          />
        </div>
      )}
    </Layout>
  );
}
