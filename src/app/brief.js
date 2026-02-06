import Layout from '@/components/layout';
import useTranslation from 'next-translate/useTranslation';
import { fetchAPI } from 'lib/api';
import TitleSection from '@/components/ui/TitleSection';
import BreadCrumbs from '@/components/ui/Breadcrumbs';
import Line from '@/components/ui/Line';
import FormBrief from '@/components/Brief/FormBrief';
import Seo from '@/components/seo';

export default function Brief({
  categories,
  visobjs,
  seoBrief,
  data,
  menu,
  headerMenu,
}) {
  const { t } = useTranslation('common');

  const seo = {
    metaTitle: seoBrief.attributes.SeoBrief.metaTitle,
    metaDescription: seoBrief.attributes.SeoBrief.metaDescription,
    //shareImage: project.attributes.Poster,
  };

  return (
    <Layout
      bg="white"
      headerBg="white"
      footerBg="white"
      pillowColor={'grey'}
      data={data}
      headerContact={data.attributes}
      menu={menu}
      header={headerMenu}
    >
      <Seo seo={seo} />
      <TitleSection text={t('brief.title_fill')} />
      <div className="container">
        <Line variantColor="grey" />
      </div>
      <BreadCrumbs
        links={[
          {
            title: t('brief.title_fill'),
          },
        ]}
      />

      <FormBrief categories={categories} visobjs={visobjs} />

      <div className="container">
        <Line variantColor="grey" />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const [
    headerRes,
    contactRes,
    menuRes,
    categoriesRes,
    visobjRes,
    seoBriefRes,
  ] = await Promise.all([
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
      fields: ['name', 'slug'],
      filters: { id: { $notIn: [13, 14] } },
      locale: locale,
    }),
    fetchAPI('/visualization-objects', {
      populate: '*',
      locale: locale,
    }),
    fetchAPI('/about', {
      fields: ['Title'],
      populate: ['SeoBrief'],

      locale: locale,
    }),
  ]);

  return {
    props: {
      data: contactRes.data,
      menu: menuRes,
      headerMenu: headerRes,
      categories: categoriesRes.data,
      visobjs: visobjRes.data,
      seoBrief: seoBriefRes.data,
    },
    revalidate: 60,
  };
}
