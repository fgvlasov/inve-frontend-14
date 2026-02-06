import Layout from "@/components/layout";
import TitleSection from "@/components/ui/TitleSection";
import BreadCrumbs from "@/components/ui/Breadcrumbs";
import { fetchAPI } from "lib/api";
import ServicesSlides from "@/components/Services/ServicesSlides";
import Map from "@/components/ui/Map";
import IntroCost from "@/components/ui/IntroCost";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import Address from "@/components/ui/Address";
import Line from "@/components/ui/Line";
import Seo from "@/components/seo";

function Contacts({ contact, blogs, data, menu, headerMenu }) {
  const seo = {
    metaTitle: contact.attributes.Seo.metaTitle,
    metaDescription: contact.attributes.Seo.metaDescription,
    shareImage: "",
  };

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
      <Seo seo={seo} />
      <TitleSection text={contact.attributes.Title} />
      <div className='container'>
        <Line variantColor='grey' />
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
      <div className='container'>
        <Address
          address={contact.attributes.Address}
          phone={contact.attributes.Phone}
          email={contact.attributes.Email}
          socials={contact.attributes.ContactSocials}
        />
        <ServicesSlides />
      </div>

      <Map />
      <IntroCost />
      <BlogsBlockList articleColor='inherit' titleColor='black' buttonColor='black' blogRes={blogs} />
      <div className='container'>
        <Line variantColor='grey' />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [headerRes, menuRes, contactRes, blogsRes] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale: locale,
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale: locale,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale: locale,
      populate: ["ContactSocials", "Seo"],
    }),
    fetchAPI("/blogs", {
      fields: ["Title", "slug", "Preview"],
      populate: ["tag", "Image_preview"],
      locale: locale,
    }),
  ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      contact: contactRes.data,
      blogs: blogsRes.data,
    },
    revalidate: 60,
  };
}

export default Contacts;
