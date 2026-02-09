"use client";

import dynamic from "next/dynamic";

const SwiperMedia = dynamic(() => import("./Swiper/SwiperMedia").then((m) => m.SwiperMedia), { ssr: false });

const SwiperVideo2 = dynamic(() => import("./Swiper/SwiperVideo2").then((m) => m.SwiperVideo2), { ssr: false });

const SwiperVideo = dynamic(() => import("./Swiper/SwiperVideo").then((m) => m.SwiperVideo), { ssr: false });

type Props = {
  photos?: unknown;
  videoFiles?: { data?: unknown };
  poster?: any;
  rtVideos?: unknown[];
};

export default function ProjectCarousel({ photos, videoFiles, poster, rtVideos = [] }: Props) {
  const hasPhotos = Array.isArray(photos) ? photos.length > 0 : Boolean(photos);

  const hasRtVideos = Array.isArray(rtVideos) && rtVideos.length > 0;
  const hasVideoFiles = Boolean(videoFiles?.data);

  return (
    <div className='pt-2.5 pb-7 w-full mx-auto'>
      {hasPhotos ? (
        <SwiperMedia photos={photos} poster={poster?.data} />
      ) : hasRtVideos ? (
        <SwiperVideo2 videoSlides={rtVideos} />
      ) : hasVideoFiles ? (
        <SwiperVideo videoSlides={videoFiles!.data} poster={poster} />
      ) : (
        <div>Ничего не найдено</div>
      )}
    </div>
  );
}
