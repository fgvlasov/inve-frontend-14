import Layout from "@/components/layout";
import Wrapper from "@/components/ui/Wrapper";
import Line from "@/components/ui/Line";
import IntroError from "@/components/ui/IntroError";
import ServicesSlides from "@/components/Services/ServicesSlides";
import { fetchAPI } from "@/lib/api";

export const revalidate = 3600;

export default async function NotFound() {
  // Если у тебя есть i18n-сегменты — тут надо брать locale из params.
  // Пока ставим дефолт:
  const locale = "en";

  const [headerRes, contactRes, menuRes] = await Promise.all([
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
  ]);

  const data = contactRes?.data;
  const menu = menuRes;
  const headerMenu = headerRes;

  return (
    <Layout
      headerContact={data?.attributes}
      data={data}
      menu={menu}
      header={headerMenu}
      bg='grey'
      headerBg='black'
      footerBg='white'
      pillowColor='grey'
      variantSvg='darkSvg'
    >
      <Wrapper color='black' position='bottom'>
        <IntroError />
      </Wrapper>

      <div className='py-3.8 container contRightFull'>
        <ServicesSlides />
      </div>

      <div className='container'>
        <Line variantColor='grey' />
      </div>
    </Layout>
  );
}
