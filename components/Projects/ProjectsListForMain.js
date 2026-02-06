"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

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

function calcAspectHeight(project, targetWidth = 600, fallbackHeight = 400) {
  const media = project?.attributes?.Poster_for_mainPage?.data?.attributes ?? project?.attributes?.Poster?.data?.attributes;

  const w = media?.width;
  const h = media?.height;

  if (!w || !h) return fallbackHeight;
  return Math.round((targetWidth / w) * h);
}

function ProjectCard({ project }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const title = project?.attributes?.Title ?? "";
  const slug = project?.attributes?.slug ?? "";
  const tags = project?.attributes?.tags?.data ?? [];

  const height = useMemo(() => calcAspectHeight(project, 600, 400), [project]);

  const poster = project?.attributes?.Poster_for_mainPage ?? project?.attributes?.Poster;

  const src = poster ? getStrapiMedia(poster) : null;

  return (
    <ProjectItem key={project.id} name={title} link={slug}>
      <div className='rounded-l15 relative'>
        {src && (
          <img
            src={src}
            width='600'
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
              {tags.map((x) => (
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

export default function ProjectsListForMain({ projects, moreProjects = false }) {
  if (!projects) return <Loading />;

  // ✅ стабилизируем порядок + ключи
  const items = useMemo(() => {
    const arr = Array.isArray(projects) ? [...projects] : [];
    // если есть ListPosition — можно стабильно досортировать
    arr.sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0));
    return arr;
  }, [projects]);

  return (
    <section className='pt-16 pb-5 md:pt-[60px] text-blackRussian md:pb-12 lg:pt-36 lg:pb-9'>
      <div className='container'>
        <div className='lg:pb-20'>
          <ProjectsTitle />

          <div className='pt-15 pb-3.8 border-t border-black-russian md:pt-10 lg:pt-12'>
            {/* ✅ SSR-safe fallback grid: одинаковый HTML до гидрации */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {items.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* ✅ Клиентская masonry (включится после загрузки JS) */}
            <div className='hidden'>
              <ProjectsMasonryClient>
                {items.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </ProjectsMasonryClient>
            </div>
          </div>

          {moreProjects && <ProjectButton />}
        </div>
      </div>

      <Marquee />
    </section>
  );
}
