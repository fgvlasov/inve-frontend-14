import Layout from "@/components/layout";
import { fetchAPI } from "@/lib/api";
import { buildMetadata } from "@/lib/metadata";
import ServicesAbout from "@/components/Services/ServicesAbout";
import BlogsBlockList from "@/components/Blogs/BlogsBlockList";
import ServicesListHome from "@/components/Services/ServicesListHome";
import Line from "@/components/ui/Line";
import Wrapper from "@/components/ui/Wrapper";
import ProjectsListForMain from "@/components/Projects/ProjectsListForMain";
import homeStyles from "./Home.module.css";

// ✅ ISR replacement for getStaticProps revalidate: 60
export const revalidate = 60;

// Adjust if you want another default locale
const DEFAULT_LOCALE = "ru";

async function getHomeData(locale = DEFAULT_LOCALE) {
  const [headerRes, contactRes, menuRes, projectsRes, servicesRes, servicesAboutRes, aboutRes, blogRes, globalRes, globalMarquee] =
    await Promise.all([
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
      fetchAPI("/projects", {
        sort: ["ListPosition:asc"],
        populate: {
          Poster: "*",
          Poster_for_mainPage: "*",
          tags: "*",
        },
        fields: ["title", "slug"],
        locale,
        filters: {
          ShowOnMainPage: true,
          publishedAt: { ne: null },
        },
        publicationState: "live",
        pagination: {
          start: 0,
          limit: 8,
        },
      }),
      fetchAPI("/categories", {
        populate: ["image"],
        fields: ["name", "slug", "textPart1", "textPart2"],
        locale,
        publicationState: "live",
        filters: {
          ShowOnMainPage: true,
        },
        pagination: {
          start: 0,
          limit: 3,
        },
      }),
      fetchAPI("/categories", {
        filters: {
          ShowAsSlide: true,
        },
        fields: ["name", "slug"],
        locale,
        publicationState: "live",
        populate: {
          Slides: {
            sort: ["SlidePosition:asc"],
            populate: "*",
          },
          imagePresentationLink: "*",
        },
      }),
      fetchAPI("/about", {
        fields: ["SloganPart1", "SloganPart2"],
        populate: ["Video"],
        locale,
      }),
      fetchAPI("/blogs", {
        fields: ["Title", "slug", "Preview"],
        populate: ["tag", "Image_preview"],
        locale,
        publicationState: "live",
      }),
      fetchAPI("/global", {
        populate: ["defaultSeo"],
        locale,
      }),
      fetchAPI("/global", {
        populate: ["Marquee"],
        locale,
      }),
    ]);

  return {
    projects: projectsRes?.data ?? [],
    services: servicesRes?.data ?? [],
    servicesAbout: servicesAboutRes?.data ?? [],
    about: aboutRes?.data ?? null,
    blogs: blogRes?.data ?? [],
    global: globalRes?.data ?? null,
    globalMarquee: globalMarquee?.data.attributes.Marquee ?? null,
    data: contactRes?.data ?? null,
    menu: menuRes ?? null,
    headerMenu: headerRes ?? null,
  };
}

export async function generateMetadata() {
  const { global } = await getHomeData(DEFAULT_LOCALE);
  return buildMetadata(null, global?.attributes ?? undefined);
}

export default async function HomePage() {
  const { projects, services, servicesAbout, about, blogs, global, globalMarquee, data, menu, headerMenu } =
    await getHomeData(DEFAULT_LOCALE);

  // If you still need the seo object for something else inside Layout/components, keep it:
  // const seo = {
  //   metaTitle: global?.attributes?.defaultSeo?.metaTitle,
  //   metaDescription: global?.attributes?.defaultSeo?.metaDescription,
  // };
  //console.log(globalMarquee);

  return (
    <Layout
      headerContact={data?.attributes}
      data={data}
      menu={menu}
      header={headerMenu}
      bg='black'
      headerBg='black'
      footerBg='black'
      pillowColor='dark'
      variantSvg='darkSvg'
    >
      <main className={homeStyles.main}>
        <ServicesAbout about={about} servicesAbout={servicesAbout} />
        <ServicesListHome services={services} />

        <Wrapper color='grey' position='top'>
          <ProjectsListForMain projects={projects} moreProjects={true} marqueeData={globalMarquee} />
        </Wrapper>

        <BlogsBlockList articleColor='nero' titleColor='white' buttonColor='white' blogRes={blogs} />

        <div className='container'>
          <Line variantColor='eclipse' />
        </div>
      </main>
    </Layout>
  );
}
