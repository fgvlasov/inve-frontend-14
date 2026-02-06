import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import { fetchAPI } from "@/lib/api";
import ServicesSlides from "@/components/Services/ServicesSlides";
import Map from "@/components/ui/Map";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Address from "@/components/ui/Address";
import Line from "@/components/ui/Line";
import { getGlobal, buildMetadata } from "@/lib/metadata";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateMetadata() {
  const [data, global] = await Promise.all([
    getContactsData(DEFAULT_LOCALE),
    getGlobal(DEFAULT_LOCALE),
  ]);
  const seo = data.contact?.attributes?.Seo;
  const pageSeo = seo
    ? { metaTitle: seo.metaTitle, metaDescription: seo.metaDescription }
    : null;
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

async function getContactsData(locale: string) {
  const [headerRes, menuRes, contactRes, blogsRes, slidesRes] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale,
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale,
      populate: ["ContactSocials", "Seo"],
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tag", "Image_preview"],
      locale,
    }),
    fetchAPI("/categories", {
      filters: { ShowAsSlide: true },
      fields: ["name", "slug"],
      locale,
      populate: {
        Slides: { sort: ["SlidePosition:asc"], populate: "*" },
      },
    }),
  ]);

  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    contact: contactRes.data,
    blogs: blogsRes.data,
    slides: slidesRes.data ?? [],
  };
}

export default async function ContactsPage() {
  const { contact, blogs, data, menu, headerMenu, slides } = await getContactsData(DEFAULT_LOCALE);

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
      <TitleSection text={contact.attributes.Title} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs
        links={[
          {
            title: contact.attributes.Title,
            path: "",
            active: false,
          },
        ]}
      />
      <div className="container">
        <Address
          address={contact.attributes.Address}
          phone={contact.attributes.Phone}
          email={contact.attributes.Email}
          socials={contact.attributes.ContactSocials}
        />
        <ServicesSlides slides={slides} />
      </div>

      <Map />
      <IntroCost />
      <BlogsBlockList articleColor="inherit" titleColor="black" buttonColor="black" blogRes={blogs} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
    </Layout>
  );
}
