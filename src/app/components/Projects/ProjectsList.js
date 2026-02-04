import Tag from "@/components/ui/Tag";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItemWork from "../ui/ProjectItemWork";
import ProjectItemImage from "../ui/ProjectItemImage";
import { getStrapiMedia } from "lib/media";
import useTranslation from "next-translate/useTranslation";
import ProjectButton from "../ui/ProjectButton";

export default function ProjectsList({
  projects,
  moreProjects,
  projectsQuantity = 100,
  focusService = null,
}) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;

  return (
    <section
      className="container bg-whisper relative z-10 rounded-5xl pb-6 pt-6 text-blackRussian
    md:pb-6 lg:pt-12 lg:rounded-7xl overflow-hidden"
    >
      <div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }}
          className="lg:max-w-[1746px] mx-auto"
        >
          <Masonry gutter="37px">
            {projects.map((project) => (
              <ProjectItemWork
                key={project.id}
                name={project.attributes.Title}
                link={project.attributes.slug}
              >
                <ProjectItemImage
                  link={getStrapiMedia(project.attributes.Poster)}
                  width="398"
                  height="302"
                  variant="imageBlock"
                />{" "}
                {project.attributes.tags.data.length > 0 && (
                  <div
                    className={"z-2 relative flex gap-1 uppercase flex-wrap"}
                  >
                    {project.attributes.tags.data.map((x) => {
                      return (
                        <Tag
                          key={x.attributes.Name}
                          text={x.attributes.Name}
                          href={x.attributes.slug}
                        />
                      );
                    })}
                  </div>
                )}
              </ProjectItemWork>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {moreProjects && <ProjectButton />}
    </section>
  );
}
