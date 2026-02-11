"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

import ProjectItem from "@/components/ui/ProjectItem";
import Tag from "@/components/ui/Tag";
import Marquee from "@/components/ui/Marquee";
import ProjectButton from "@/components/ui/ProjectButton";
import ProjectsTitle from "./ProjectsTitle";

import { getStrapiMedia } from "@/lib/media";
import Loading from "../ui/Loading";

// ✅ Masonry только на клиенте (SSR выключен)
const ProjectsMasonryClient = dynamic(() => import("./ProjectsMasonryClient"), {
  ssr: false,
});

function calcAspectHeight(project: any, targetWidth = 600, fallbackHeight = 400) {
  const media = project?.attributes?.Poster_for_mainPage?.data?.attributes ?? project?.attributes?.Poster?.data?.attributes;

  const w = media?.width;
  const h = media?.height;

  if (!w || !h) return fallbackHeight;
  return Math.round((targetWidth / w) * h);
}

function ProjectCard({ project }: { project: any }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const title = project?.attributes?.Title ?? "";
  const slug = project?.attributes?.slug ?? "";
  const tags = project?.attributes?.tags?.data ?? [];

  const height = useMemo(() => calcAspectHeight(project, 600, 400), [project]);

  const poster = project?.attributes?.Poster_for_mainPage ?? project?.attributes?.Poster;
  const src = poster ? getStrapiMedia(poster) : null;

  return (
    <ProjectItem name={title} link={slug}>
      <div className='rounded-l15 relative'>
        {src && (
          <img
            src={src}
            width={600}
            height={height}
            loading='lazy'
            alt={title}
            className='rounded-l15 relative w-full'
            style={{
              filter: !isLoaded ? "blur(70px)" : "none",
              transition: "filter 0.2s ease-out",
            }}
            onLoad={() => setIsLoaded(true)}
          />
        )}

        {tags.length > 0 && (
          <div className='absolute top-5 left-5 right-5'>
            <div className='z-2 relative flex gap-1 uppercase flex-wrap'>
              {tags.map((x: any) => (
                <Tag
                  key={x.id ?? x.attributes?.slug ?? x.attributes?.Name}
                  text={x.attributes?.Name}
                  href={x.attributes?.slug}
                  usedFor='projects'
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </ProjectItem>
  );
}

export default function ProjectsListForMain({
  projects,
  moreProjects = false,
  marqueeData,
}: {
  projects: any[];
  moreProjects?: boolean;
  marqueeData: any;
}) {
  if (!projects) return <Loading />;

  // ✅ включаем masonry только после mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ✅ стабилизируем порядок
  const items = useMemo(() => {
    const arr = Array.isArray(projects) ? [...projects] : [];
    arr.sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0));
    return arr;
  }, [projects]);

  const cards = useMemo(() => items.map((project) => <ProjectCard key={project.id} project={project} />), [items]);

  return (
    <section className='pt-16 pb-5 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-36 lg:pb-9'>
      <div className='container'>
        <div className='lg:pb-20'>
          <ProjectsTitle />

          <div className='pt-15 pb-3.8 border-t border-black-russian md:pt-10 lg:pt-12'>
            {!mounted ? (
              // ✅ SSR-safe fallback grid (одинаковый HTML до гидрации)
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>{cards}</div>
            ) : (
              // ✅ Masonry уже на клиенте
              <ProjectsMasonryClient>{cards}</ProjectsMasonryClient>
            )}
          </div>

          {moreProjects && <ProjectButton />}
        </div>
      </div>

      <Marquee texts={marqueeData} />
    </section>
  );
}
