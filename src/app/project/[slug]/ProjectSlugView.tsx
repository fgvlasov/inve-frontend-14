import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import TagBlock from "@/components/Projects/TagBlock";
import Line from "@/components/ui/Line";
import ProjectCarousel from "@/components/Projects/ProjectCarousel";
import ProjectAbout from "@/components/Projects/ProjectAbout";
import IntroCost from "@/components/ui/IntroCost";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";

type StrapiRel<T> = { data?: T } | null | undefined;
type StrapiMany<T> = { data?: T[] } | null | undefined;

type ProjectAttrs = {
  Title?: string;
  tags?: unknown[]; // у тебя сейчас any[] в TagBlock — оставим так
  ProjectSliderFotos?: StrapiMany<unknown>;
  Poster?: unknown;
  VideoFile?: StrapiRel<unknown>; // ✅ вот это важно
  rtVideos?: unknown[]; // ✅ и это
  ProjectTask?: string;
  ProjectDone?: string;
  CustomerName?: string;
  CustomerUrl?: string;
  Iframe_mod?: string;
};

interface ProjectSlugViewProps {
  project: { attributes: ProjectAttrs };
  projectsOther: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown[];
  headerMenu: unknown[];
}

export default function ProjectSlugView({ project, projectsOther, data, menu, headerMenu }: ProjectSlugViewProps) {
  const attrs = project?.attributes ?? {};
  //console.log(projectsOther);

  const tags: any[] = (attrs.tags ?? []) as any[];

  const breadCrumbsItems = [{ title: "Портфолио", path: "/portfolio" }, { title: (attrs.Title ?? "") as string }];

  // ✅ нормализация, чтобы TS не ругался и ProjectCarousel получил ожидаемую форму
  const photos = (attrs.ProjectSliderFotos?.data ?? []) as unknown[];
  const videoFiles = (attrs.VideoFile ?? undefined) as { data?: unknown } | undefined;
  const rtVideos = (attrs.rtVideos ?? []) as unknown[];

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg='white'
      headerBg='white'
      footerBg='white'
      pillowColor='white'
      variantSvg='darkSvg'
    >
      <TitleSection text={(attrs.Title ?? "") as string}> </TitleSection>
      {tags.length > 0 && <TagBlock tags={tags} />}
      <div className='container'>
        <Line variantColor='grey' />
      </div>
      <BreadCrumbs links={breadCrumbsItems} />
      {photos && <ProjectCarousel photos={photos} poster={attrs.Poster} videoFiles={videoFiles} rtVideos={rtVideos} />}
      {attrs.Iframe_mod ? (
        <div className='container iframeCrop'>
          <div dangerouslySetInnerHTML={{ __html: attrs.Iframe_mod }} />
        </div>
      ) : null}
      {attrs.ProjectTask && (
        <ProjectAbout
          task={(attrs.ProjectTask ?? "") as string}
          done={(attrs.ProjectDone ?? "") as string}
          CustomerName={(attrs.CustomerName ?? "") as string}
          CustomerUrl={(attrs.CustomerUrl ?? "") as string}
        />
      )}
      <div className='container'>
        <Line variantColor='grey' />
      </div>
      <div className='py-10 md:py-15 lg:py-18'>
        <IntroCost />
      </div>

      {projectsOther && <PortfolioCarousel title='Другие проекты' projects={projectsOther as any} />}

      <div className='container'>
        <Line variantColor='grey' />
      </div>
    </Layout>
  );
}
