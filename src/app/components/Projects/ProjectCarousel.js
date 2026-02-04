import { SwiperVideo } from "./Swiper/SwiperVideo";
import { SwiperVideo2 } from "./Swiper/SwiperVideo2";
// import { SwiperPhotos } from "./Swiper/SwiperPhotos";
import { SwiperMedia } from "./Swiper/SwiperMedia";

export default function ProjectCarousel({
  photos,
  videoFiles,
  poster,
  rtVideos,
}) {  
  return (
    <>
      <div className="pt-2.5 pb-7 w-full mx-auto">
        {
          (() => {
            if (photos) {
              return <SwiperMedia photos={photos} poster={poster?.data} />;
            } else if (rtVideos.length > 0) {
              return <SwiperVideo2 videoSlides={rtVideos} />;
            } else if (videoFiles?.data) {
              return <SwiperVideo videoSlides={videoFiles.data} poster={poster} />;
            } else {
              return <div>Ничего не найдено</div>;
            }
          })()
        }
      </div>
    </>
  );
}
