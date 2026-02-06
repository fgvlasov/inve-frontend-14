"use client";

import useTranslation from "next-translate/useTranslation";
import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import Line from "@/components/ui/Line";
import FormBrief from "@/components/Brief/FormBrief";

interface BriefViewProps {
  categories: unknown[];
  visobjs: unknown[];
  data: { attributes: Record<string, unknown> };
  menu: unknown;
  headerMenu: unknown;
}

export default function BriefView({ categories, visobjs, data, menu, headerMenu }: BriefViewProps) {
  const { t } = useTranslation("common");

  return (
    <Layout
      bg='white'
      headerBg='white'
      footerBg='white'
      pillowColor='grey'
      data={data}
      headerContact={data.attributes}
      menu={menu}
      header={headerMenu}
    >
      <TitleSection text={t("brief.title_fill")}> </TitleSection>
      <div className='container'>
        <Line variantColor='grey' />
      </div>
      <BreadCrumbs
        links={[
          {
            title: t("brief.title_fill"),
          },
        ]}
      />

      <FormBrief categories={categories} visobjs={visobjs} />

      <div className='container'>
        <Line variantColor='grey' />
      </div>
    </Layout>
  );
}
