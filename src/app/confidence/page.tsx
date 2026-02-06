import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import { fetchAPI } from "@/lib/api";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 3600;

export async function generateMetadata() {
  const [data, global] = await Promise.all([
    getConfidenceData(DEFAULT_LOCALE),
    getGlobal(DEFAULT_LOCALE),
  ]);
  const seo = data.agreement?.attributes?.Seo;
  const pageSeo = seo
    ? { metaTitle: seo.metaTitle, metaDescription: seo.metaDescription }
    : null;
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

async function getConfidenceData(locale: string) {
  const [headerRes, contactRes, menuRes, agreementRes] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale,
      populate: "ContactSocials",
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale,
    }),
    fetchAPI("/agreement", {
      fields: ["Title", "TextEditor"],
      locale,
      populate: ["Seo"],
    }),
  ]);

  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    agreement: agreementRes.data,
  };
}

export default async function ConfidencePage() {
  const { agreement, data, menu, headerMenu } = await getConfidenceData(DEFAULT_LOCALE);

  return (
    <Layout
      data={data}
      menu={menu}
      header={headerMenu}
      headerContact={data.attributes}
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor=""
      variantSvg="darkSvg"
    >
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
