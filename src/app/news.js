import Layout from '@/components/layout';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import Line from '@/components/ui/Line';
import NewsList from '@/components/News/NewsList';
import IntroCost from '@/components/ui/IntroCost';
import { fetchAPI } from 'lib/api';
import Seo from '@/components/seo';
import useTranslation from 'next-translate/useTranslation';

export default function News({ news, data, menu, headerMenu }) {
  const { t } = useTranslation('common');

  const breadCrumbsItems = [
    {
      title: t('news.company_news'),
    },
  ];

  const seo = {
    metaTitle: t('news.company_news'),
    metaDescription: t('news.meta_description'),
    shareImage: '',
  };

  return (
    <Layout
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor=""
      headerContact={data.attributes}
      data={data}
      menu={menu}
      header={headerMenu}
    >
      <Seo seo={seo} />
      <TitleSection text={t('news.company_news')} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs links={breadCrumbsItems} />
      <NewsList news={news} />
      <IntroCost />
      <div className="container">
        <Line variantColor="grey" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [headerRes, contactRes, menuRes, blogsRes] = await Promise.all([
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
    fetchAPI('/blogs', {
      fields: ['Title', 'slug', 'Preview', 'Weight'],
      locale: locale,
      populate: {
        Image_preview: '*',
        tag: '*',
      },
      sort: 'Weight:asc',
      pagination: {
        start: 0,
        limit: 6,
      },
    }),
  ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      news: blogsRes.data,
    },
    revalidate: 60,
  };
}
