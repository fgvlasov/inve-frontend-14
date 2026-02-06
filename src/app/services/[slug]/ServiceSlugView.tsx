"use client";

import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import ServiceIntro from "@/components/Services/ServiceIntro";
import IntroCost from "@/components/ui/IntroCost";
import ServicesSlides from "@/components/Services/ServicesSlides";
import ProjectsList from "@/components/Projects/ProjectsList";
import Wrapper from "@/components/ui/Wrapper";
import ServicesForCategory from "@/components/Services/ServicesForCategory";
import Line from "@/components/ui/Line";
import ServicesWhatIs from "@/components/Services/ServicesWhatIs";
import ServicesAdvantages from "@/components/Services/ServicesAdvantages";
import ServicesPrice from "@/components/Services/ServicesPrice";
import ServicesChoice from "@/components/Services/ServicesChoise";
import ServicesThreePage from "@/components/Services/ServicesThreeOnPage";
import ServicesWorkPlan from "@/components/Services/ServicesWorkPlan";
import ServicesVideo from "@/components/Services/ServicesVideo";
import FormConsultation from "@/components/ui/FormConsultation";

interface ServiceSlugViewProps {
  category: { id: number; attributes: Record<string, unknown> };
  projects: unknown[];
  threeCategories: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
  slides: unknown[];
}

export default function ServiceSlugView({
  category,
  projects,
  threeCategories,
  data,
  menu,
  headerMenu,
  slides,
}: ServiceSlugViewProps) {
  const { t } = useTranslation("common");

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg="black"
      headerBg="white"
      footerBg="black"
      pillowColor="dark"
      variantSvg="darkSvg"
    >
      <Wrapper color="grey" position="bottom">
        <TitleSection text={category.attributes.name as string} />
        <div className="container">
          <Line variantColor="grey" />
        </div>
        <BreadCrumbs
          links={[
            { title: t("services.linkServices"), path: "/services" },
            { title: category.attributes.name as string },
          ]}
        />
        <ServiceIntro
          title={t("About service")}
          text={category.attributes.Description as string}
          image={category.attributes.image}
        />
        <ServicesForCategory parent={category.id} />
        {category.attributes.What_is && (
          <ServicesWhatIs data={category.attributes.What_is as unknown} />
        )}
        <IntroCost />
        <div className="container contRightFull">
          <ServicesSlides slides={slides} />
        </div>
        {category.attributes.Category_advantages && (
          <ServicesAdvantages data={category.attributes.Category_advantages as unknown} />
        )}

        {category.attributes.Category_project_price && (
          <ServicesPrice data={category.attributes.Category_project_price as unknown} />
        )}

        <section className="container mt-10">
          <div className="flex flex-col md:flex-row  justify-start gap-6 md:gap-20">
            <h2 className=" whitespace-nowrap mb-7 text-3.5xl text-black-russian3 font-arial font-normal lg:text-4xl  w-[260px] ">
              Наши работы
            </h2>
            {category.attributes.Our_works_text && (
              <div className="whitespace-pre-wrap">
                {category.attributes.Our_works_text as string}
              </div>
            )}
          </div>
        </section>

        <ProjectsList
          projects={projects}
          moreProjects={true}
          focusService={category.id}
        />
        {category.attributes.Category_workplan && (
          <ServicesWorkPlan data={category.attributes.Category_workplan as unknown} />
        )}

        {category.attributes.Service_video && (
          <ServicesVideo image={category.attributes.Service_video as unknown} />
        )}

        {category.attributes.Category_why_choose && (
          <ServicesChoice data={category.attributes.Category_why_choose as unknown} />
        )}

        <ServicesThreePage
          service={category.attributes.Category_other_services as unknown}
          items={threeCategories}
        />
        <FormConsultation service={category.attributes.Service_consultation as unknown} />
      </Wrapper>
    </Layout>
  );
}
