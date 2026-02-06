import Layout from "@/components/layout";
import useTranslation from "next-translate/useTranslation";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";

import { fetchAPI } from "lib/api";
import Seo from "@/components/seo";

export default function Confidence({ agreement, text, data, menu, headerMenu }) {
  const seo = {
    metaTitle: agreement.attributes.Seo.metaTitle,
    metaDescription: agreement.attributes.Seo.metaDescription,
    shareImage: "",
  };

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor={""}
      variantSvg="darkSvg"
    >
      <Seo seo={seo} />
      <TitleSection text={agreement.attributes.Title} />
      <BreadCrumbs
        links={[
          {
            title: agreement.attributes.Title,
            path: "",
            active: false,
          },
        ]}
      />
      <div
        className="richText container !max-w-[800px] !ml-[0px]"
        dangerouslySetInnerHTML={{ __html: agreement.attributes.TextEditor }}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [
    headerRes,
    contactRes,
    menuRes,
    agreementRes] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale: locale,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale: locale,
      populate: "ContactSocials",
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale: locale,
    }),
    fetchAPI("/agreement", {
      fields: ["Title", "TextEditor"],
      locale: locale,
      populate: "*",
    }),
  ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      agreement: agreementRes.data,
    },
    revalidate: 3600,
  };
}
