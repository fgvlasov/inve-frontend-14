"use client";

import dynamic from "next/dynamic";
import PillowLink from "../ui/PillowLink";
import ProjectItemImage from "../ui/ProjectItemImage";
import Title from "../ui/Title";
import ProjectItemCarousel from "./ProjectItemCarousel";
import { getStrapiMedia } from "@/lib/media";
import Tag from "../ui/Tag";
import Loading from "../ui/Loading";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles можно оставить импортом здесь (client) — ок
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type TagType = {
  id: number;
  attributes: { Name: string; slug?: string };
};

type ProjectType = {
  id: number;
  attributes: {
    Title: string;
    slug: string;
    Poster: unknown;
    tags?: { data?: TagType[] };
  };
};

export default function PortfolioCarousel({
  title = "Смотреть портфолио",
  projects,
}: {
  title?: string;
  projects?: ProjectType[];
}) {
  if (!projects) return <Loading />;

  return (
    <div
      className='container overflow-hidden pt-21 pb-18 flex flex-col gap-10 w-full
      md:flex-row flex-wrap justify-between items-center max-w-[1746px] lg:mx-auto'
    >
      <Title text={title} variant='white' />
      <PillowLink variant='white' heightFit={true} text='Все проекты' variantSvg='blueSvg' link='/portfolio' />

      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        className='pb-7 w-full flex md:pb-10 md:gap-7 lg:pb-9'
        breakpoints={{
          768: { slidesPerView: 1.8 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => {
          const tags = project.attributes.tags?.data ?? [];

          return (
            <SwiperSlide key={project.id}>
              <ProjectItemCarousel name={project.attributes.Title} link={project.attributes.slug}>
                <ProjectItemImage link={getStrapiMedia(project.attributes.Poster)} width={288} height={147} variant='imageBlock' />
                <div className='flex gap-2'>
                  {tags.slice(0, 2).map((tag) => (
                    <Tag key={tag.id} text={tag.attributes.Name} />
                  ))}
                </div>
              </ProjectItemCarousel>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
