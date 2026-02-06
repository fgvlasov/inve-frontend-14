import Layout from '@/components/layout';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import useTranslation from 'next-translate/useTranslation';
// import IntroSlides from "@/components/ui/IntroSlides";
import IntroCost from '@/components/ui/IntroCost';
import BlogsBlockList from '@/components/Blogs/BlogsBlockList';
import ProjectsListPortfolio from '@/components/Projects/ProjectsListPortfolio';
import Line from '@/components/ui/Line';
import Wrapper from '@/components/ui/Wrapper';
import { fetchAPI } from 'lib/api';
import Seo from '@/components/seo';
import ServicesSlides from '@/components/Services/ServicesSlides';

export default function Portfolio({
  projects,
  categories,
  blogs,
  data,
  menu,
  headerMenu,
}) {
  const { t } = useTranslation('common');
  const i18n = useTranslation();
  const locale = i18n.lang;
  
  const seo = {
    metaTitle: t('works.title'),
    metaDescription: t('works.meta_description'),
    shareImage: '',
  };

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
      <Seo seo={seo} />
      <Wrapper color="grey">
        <TitleSection text={t(`works.title`)} />
        <div className="container">
          <Line variantColor="grey" />
        </div>
        <BreadCrumbs
          links={[
            {
              title: t(`works.title`),
              path: '',
              active: false,
            },
          ]}
        />
        <ProjectsListPortfolio projects={projects} categories={categories} />
      </Wrapper>
      <div className="pt-2.5 md:pt-10 lg:pt-25">
        <div className="container">
          {/* <IntroSlides /> */}
          <ServicesSlides />
        </div>
        <IntroCost />
      </div>

      <BlogsBlockList
        articleColor="nero"
        titleColor="white"
        buttonColor="white"
        blogRes={blogs}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [headerRes, contactRes, menuRes, projectsRes, categoriesRes, blogRes] =
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
      fetchAPI('/projects', {
        sort: ['ListPosition:asc'],
        populate: ['Poster', 'tags', 'categories', 'rtVideos.poster'],
        fields: ['Title', 'slug'],
        pagination: {
          pageSize: 100,
        },
        locale: locale,
        publicationState: 'live',
      }),
      fetchAPI('/categories', {
        fields: ['name', 'slug'],
        populate: ['projects'],
        locale: locale,
      }),
      fetchAPI('/blogs', {
        fields: ['Title', 'slug', 'Preview'],
        populate: ['tag', 'Image_preview'],
        locale: locale,
        publicationState: 'live',
      }),
    ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      categories: categoriesRes.data,
      projects: projectsRes.data,
      blogs: blogRes.data,
    },
    revalidate: 60,
  };
}
