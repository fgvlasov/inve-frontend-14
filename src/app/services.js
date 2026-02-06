import Layout from '@/components/layout';
import { fetchAPI } from 'lib/api';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
import Line from '@/components/ui/Line';
import Wrapper from '@/components/ui/Wrapper';
import ServicesListPage from '@/components/Services/ServicesListPage';
import ServicesSlides from '@/components/Services/ServicesSlides';
import PortfolioCarousel from '@/components/Portfolio/PortfolioCarousel';
import Seo from '@/components/seo';

export default function Services({
  services,
  projects,
  data,
  menu,
  headerMenu,
}) {
  const { t } = useTranslation('common');

  const seo = {
    metaTitle: t('services_seo.meta_title'),
    metaDescription: t('services_seo.meta_description'),
    shareImage: '',
  };

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
      <Seo seo={seo} />
      <Wrapper>
        <TitleSection text={t`services.title`} variantColor="white" />
        <div className="container">
          <Line />
        </div>
        <BreadCrumbs
          links={[
            {
              title: t`services.title`,
              path: '',
              active: false,
            },
          ]}
        />
        {services && <ServicesListPage services={services} />}
      </Wrapper>

      <div className="container md:pt-15 lg:pt-20">
        <ServicesSlides />
      </div>

      {projects && <PortfolioCarousel projects={projects} />}

      <div className="container">
        <Line variantColor="grey" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [headerRes, contactRes, menuRes, servicesRes, projectsRes] =
    await Promise.all([
      fetchAPI('/navigation/render/2', {
        fields: ['title', 'path'],
        locale: locale,
      }),
      fetchAPI('/contact', {
        fields: ['Title', 'Address', 'Phone', 'Email', 'PhoneLink'],
        locale: locale,
        populate: 'ContactSocials',
      }),
      fetchAPI('/navigation/render/3', {
        fields: ['title', 'path'],
        locale: locale,
      }),
      fetchAPI('/categories', {
        populate: '*',
        fields: [
          'name',
          'slug',
          'textPart1',
          'textPart2',
          'textPart3',
          'textPart4',
        ],
        locale: locale,
        filters: {
          ShowOnMainPage: true,
        },
        pagination: {
          start: 0,
          limit: 3,
        },
      }),
      fetchAPI('/projects', {
        sort: ['ListPosition:asc'],
        populate: ['Poster', 'tags'],
        fields: ['Title', 'slug'],
        locale: locale,
        filters: {
          ShowOnMainPage: true,
        },
        pagination: {
          start: 0,
          limit: 3,
        },
      }),
    ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      services: servicesRes.data,
      projects: projectsRes.data,
    },
    revalidate: 60,
  };
}
