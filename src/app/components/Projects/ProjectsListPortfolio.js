import Tag from "@/components/ui/Tag";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItemWork from "../ui/ProjectItemWork";
import ProjectItemImage from "../ui/ProjectItemImage";
import { getStrapiMedia } from "lib/media";
import useTranslation from "next-translate/useTranslation";
import TagItemSection from "../ui/TagItemSection";
import { useRouter } from "next/router";

export default function ProjectsListPortfolio({
  projects,
  categories,
  tag = "",
  slug = "",
}) {
  const { t } = useTranslation("common");
  const i18n = useTranslation();
  const locale = i18n.lang;
  const router = useRouter();
  const { id } = router.query;

  const handleCategoryClick = (id) => {
    router.push(`/portfolio?id=${id}`);
  };

  const filterProjects = (project) => {
    if (id && id !== "") {
      return project.attributes.categories.data.some(
        (elem) => String(elem.id) === id
      );
    } else {
      // If id is empty, show all services
      return true;
    }
  };
  const allServicesButtonColor = !router.query.id ? "blue" : "white";

  return (
    <section className="bg-whisper relative z-10 rounded-5xl pb-25 pt-6 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-12 lg:pb-9 lg:rounded-7xl">
      <div className="container flex flex-wrap md:md:m-0 lg:m-auto">
        {categories
          .filter((category) => category.id !== 13 && category.id !== 14)
          .map((category) => (
            <TagItemSection
              key={category.id}
              text={category.attributes.name}
              color={String(category.id) === id ? "blue" : "white"}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        <TagItemSection
          key="222"
          text={t("services.allServices")}
          color={allServicesButtonColor}
          onClick={() => router.push("/portfolio")}
        />
      </div>
      {projects && (
        <div className="px-3.8 lg:px-24.5 lg:pb-20">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 1024: 2 }} className="lg:max-w-[1746px] mx-auto">
            <Masonry gutter="37px">
              {projects
                .filter(filterProjects)
                // .filter(filterByTag)
                .map((project) => (
                  <ProjectItemWork key={project.id} name={project.attributes.Title} link={project.attributes.slug}>
                    <ProjectItemImage
                      link={getStrapiMedia(project.attributes.Poster)}
                      width="398"
                      height="302"
                      variant="imageBlock"
                    />{" "}
                    {project.attributes.tags.data.length > 0 && (
                      <div className={"z-2 relative flex gap-1 uppercase flex-wrap"}>
                        {project.attributes.tags.data.map((x) => {
                          return <Tag key={x.attributes.Name} text={x.attributes.Name} href={x.attributes.slug} />;
                        })}
                      </div>
                    )}
                  </ProjectItemWork>
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </section>
  );
}
