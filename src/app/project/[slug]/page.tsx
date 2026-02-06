import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/api";
import { getGlobal, buildMetadata } from "@/lib/metadata";
import ProjectSlugView from "./ProjectSlugView";

const DEFAULT_LOCALE = "ru";

export const revalidate = 60;

export async function generateStaticParams() {
  const projectsSlug = await fetchAPI("/projects", {
    fields: ["slug"],
    pagination: { pageSize: 100 },
  });
  return (projectsSlug.data ?? []).map(
    (project: { attributes: { slug: string | null } }) => ({
      slug: project.attributes.slug != null ? String(project.attributes.slug) : "",
    })
  );
}

async function getProjectData(slug: string) {
  const [headerRes, contactRes, menuRes, projectsOtherRes, projectsRes] = await Promise.all([
    fetchAPI("/navigation/render/2", {
      fields: ["title", "path"],
      locale: DEFAULT_LOCALE,
    }),
    fetchAPI("/contact", {
      fields: ["Title", "Address", "Phone", "Email", "PhoneLink"],
      locale: DEFAULT_LOCALE,
      populate: "ContactSocials",
    }),
    fetchAPI("/navigation/render/3", {
      fields: ["title", "path"],
      locale: DEFAULT_LOCALE,
    }),
    fetchAPI("/projects", {
      fields: ["Title", "slug"],
      locale: DEFAULT_LOCALE,
      populate: ["Poster", "tags"],
      pagination: { start: 0, limit: 6 },
    }),
    fetchAPI("/projects", {
      locale: DEFAULT_LOCALE,
      populate: [
        "Poster",
        "tags",
        "rtVideos.poster",
        "Seo",
        "ProjectSliderFotos",
        "VideoFile",
        "categories",
      ],
      fields: "*",
      pagination: { pageSize: 100 },
      filters: { slug },
    }),
  ]);

  const project = projectsRes.data?.[0] ?? null;
  return {
    data: contactRes.data,
    menu: menuRes,
    headerMenu: headerRes,
    project,
    projectsOther: projectsOtherRes.data ?? [],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getProjectData(slug);
  if (!data.project) return {};
  const global = await getGlobal(DEFAULT_LOCALE);
  const seo = data.project.attributes?.Seo as { metaTitle?: string; metaDescription?: string } | undefined;
  const pageSeo = seo
    ? {
        metaTitle: seo.metaTitle,
        metaDescription: seo.metaDescription,
        shareImage: data.project.attributes.Poster,
      }
    : {
        metaTitle: data.project.attributes.Title,
        metaDescription: (data.project.attributes as Record<string, unknown>).ProjectTask as string | undefined,
        shareImage: data.project.attributes.Poster,
      };
  return buildMetadata(pageSeo, global?.attributes ?? undefined);
}

export default async function ProjectSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { project, projectsOther, data, menu, headerMenu } = await getProjectData(slug);

  if (!project) notFound();

  return (
    <ProjectSlugView
      project={project}
      projectsOther={projectsOther}
      data={data}
      menu={menu}
      headerMenu={headerMenu}
    />
  );
}
