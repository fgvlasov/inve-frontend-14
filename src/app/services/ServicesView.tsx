"use client";

import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";
import Wrapper from "@/components/ui/Wrapper";
import ServicesListPage from "@/components/Services/ServicesListPage";
import ServicesSlides from "@/components/Services/ServicesSlides";
import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";

interface ServicesViewProps {
  services: unknown[];
  projects: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
  slides?: unknown[];
}

export default function ServicesView({
  services,
  projects,
  data,
  menu,
  headerMenu,
  slides = [],
}: ServicesViewProps) {
  const { t } = useTranslation("common");

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg="white"
      headerBg="black"
      footerBg="white"
      pillowColor="white"
      variantSvg="darkSvg"
    >
      <Wrapper>
        <TitleSection text={t("services.title")} variantColor="white" />
        <div className="container">
          <Line />
        </div>
        <BreadCrumbs
          links={[
            {
              title: t("services.title"),
              path: "",
              active: false,
            },
          ]}
        />
        {services && <ServicesListPage services={services} />}
      </Wrapper>

      <div className="container md:pt-15 lg:pt-20">
        <ServicesSlides slides={slides} />
      </div>

      {projects && <PortfolioCarousel projects={projects} />}

      <div className="container">
        <Line variantColor="grey" />
      </div>
    </Layout>
  );
}
