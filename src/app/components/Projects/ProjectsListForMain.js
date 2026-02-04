import ProjectItem from "@/components/ui/ProjectItem";
import Tag from "@/components/ui/Tag";
import Marquee from "@/components/ui/Marquee";
import ProjectItemImage from "@/components/ui/ProjectItemImage";
import ProjectButton from "@/components/ui/ProjectButton";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectsTitle from "@/components/Projects/ProjectsTitle";
import { getStrapiMedia } from "lib/media";
import Loading from "../ui/Loading";
import Image from "next/image";
import { useState } from "react"

export default function ProjectsListForMain({
  projects,
  moreProjects = false,
}) {
  const [loaded, setLoaded] = useState(false)

  if (!projects) {
    return <Loading />;
  }
  
  
  return (
    <section className="pt-16 pb-5 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-36 lg:pb-9">
      <div className="container">
        <div className="lg:pb-20">
          <ProjectsTitle />

          <ResponsiveMasonry
            className="pt-15 pb-3.8 border-t border-black-russian md:pt-10 
          lg:pt-12"
            columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }}
          >
            <Masonry gutter="30px">
              {projects.map((project, i) => {
                const aspectRatio = 400;
                if (project.attributes.Poster_for_mainPage.data != null) {
                  const posterHeight = project.attributes.Poster_for_mainPage.data.attributes.height;
                  const posterWidth = project.attributes.Poster_for_mainPage.data.attributes.width;
                  const aspectRatio = (600 / posterWidth) * posterHeight;
                }
                return (
                  <ProjectItem
                    key={project.id}
                    name={project.attributes.Title}
                    link={project.attributes.slug}
                  >
                    <div className="rounded-l15 relative">
                      {project.attributes.Poster_for_mainPage.data != null && (
                        <img
                          src={getStrapiMedia(
                            project.attributes.Poster_for_mainPage
                              ? project.attributes.Poster_for_mainPage
                              : project.attributes.Poster
                          )}
                          width="600"
                          height={aspectRatio}
                          // quality={100}
                          loading="lazy"
                          alt={project.attributes.Title}
                          className="rounded-l15 relative w-full"
                          style={{
                            filter: !loaded ? "blur(70px)" : "none",
                            transition: "filter 0.2s ease-out",
                          }}
                          onLoad={() => setLoaded(true)}
                        />
                      )}
                      {project.attributes.tags.data.length > 0 && (
                        <div className="absolute top-5 left-5 right-5">
                          <div
                            className={
                              "z-2 relative flex gap-1 uppercase flex-wrap"
                            }
                          >
                            {project.attributes.tags.data.map((x) => {
                              return (
                                <Tag
                                  key={x.attributes.Name}
                                  text={x.attributes.Name}
                                  href={x.attributes.slug}
                                  usedFor="projects"
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </ProjectItem>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>

          {moreProjects && <ProjectButton />}
        </div>
      </div>
      <Marquee />
    </section>
  );
}
