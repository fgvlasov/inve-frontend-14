import Layout from '@/components/layout';
import { fetchAPI } from 'lib/api';
import IntroCost from '@/components/ui/IntroCost';
import useTranslation from 'next-translate/useTranslation';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import ProjectsList from '@/components/Projects/ProjectsList';
import BlogsBlockList from '@/components/Blogs/BlogsBlockList';
import Wrapper from '@/components/ui/Wrapper';
import Line from '@/components/ui/Line';
import AboutIntro from '@/components/About/AboutIntro';
import Seo from '@/components/seo';
import ProjectsTitle from '@/components/Projects/ProjectsTitle';

export default function About({
  about,
  projects,
  blogs,
  data,
  menu,
  headerMenu,
}) {
  const { t } = useTranslation('common');
  const seo = {
    metaTitle: about.attributes.Seo.metaTitle,
    metaDescription: about.attributes.Seo.metaDescription,
    shareImage: '',
  };

  return (
    <Layout
      headerContact={data.attributes}
      data={data}
      menu={menu}
      header={headerMenu}
      bg="black"
      headerBg="white"
      footerBg="black"
      pillowColor="dark"
      variantSvg="darkSvg"
    >
      <Seo seo={seo} />
      <Wrapper color="grey">
        <TitleSection text={about.attributes.Title} />
        <div className="container">
          <Line variantColor="grey" />
        </div>
        <BreadCrumbs
          links={[
            {
              title: about.attributes.Title,
              path: '',
              active: false,
            },
          ]}
        />

        <AboutIntro
          title1={about.attributes.Title}
          text1={about.attributes.AboutPurpose}
          title2={t(`about.aboutOpportunities`)}
          text2={about.attributes.AboutOpportunities}
        />
        <IntroCost />
        <div className="container py-10 lg:pt-15">
          <ProjectsTitle />
          <Line width="full" />
        </div>
        <ProjectsList moreProjects={true} projects={projects} />
      </Wrapper>
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
  const [headerRes, contactRes, menuRes, aboutRes, projectsRes, blogRes] =
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
      fetchAPI('/about', {
        populate: '*',
        locale: locale,
      }),
      fetchAPI('/projects', {
        sort: ['ListPosition:asc'],
        populate: {
          Poster: '*',
          tags: '*',
        },
        locale: locale,
        fields: ['title', 'slug'],
        pagination: {
          start: 0,
          limit: 6,
        },
      }),
      fetchAPI('/blogs', {
        fields: ['Title', 'slug', 'Preview'],
        populate: ['tag', 'Image_preview'],
        locale: locale,
      }),
    ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      about: aboutRes.data,
      projects: projectsRes.data,
      blogs: blogRes.data,
    },
    revalidate: 60,
  };
}
