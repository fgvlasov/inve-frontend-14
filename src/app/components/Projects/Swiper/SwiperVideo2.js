import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image"
import { Thumbs, Pagination } from "swiper/modules";
import 'swiper/css/pagination';

export const SwiperVideo2 = ({ videoSlides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className="relative container">
      <div className="container !max-w-[1600px] relative overflow-hidden w-full h-full aspect-video">
        <Swiper
          className="w-full h-full"
          scrollbar={{ draggable: true }}
          loop={true}
          centeredSlides={true}
          modules={[Thumbs, Pagination]}
          thumbs={{
            swiper: thumbsSwiper,
          }}
        >
          {videoSlides.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <iframe
                  className="rounded-xl mx-auto absolute inset-0 w-full h-full"
                  src={video.src}
                  loading="lazy"
                  aria-hidden="false"
                  allowFullScreen
                  allow="encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {videoSlides.length > 1 && (
        <div className="2xl:pt-12 !max-w-[1600px] xl:pt-12 lg:pt-7 pt-2 z-5 w-full h-full mx-auto container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={setThumbsSwiper}
          >
            {videoSlides.map((photo, index) => (
              <SwiperSlide key={index} style={{ flexShrink: 1 }}>
                <div className="rounded-lr  w-full overflow-hidden">
                  {photo.poster.data == null ? (
                    <p className="flex items-center justify-center bg-gray w-full h-full text-white rounded-xl">
                      Картинка не задана
                    </p>
                  ) : (
                    <Image
                      className="w-full h-full object-cover"
                      width={266}
                      height={150}
                      quality={100}
                      alt={photo.poster.data?.attributes.alternativeText}
                      src={
                        `https://admin.invert.studio` +
                        photo.poster.data?.attributes.url
                      }
                      style={{
                        filter: !loaded ? "blur(70px)" : "none",
                        transition: "filter 0.2s ease-out",
                      }}
                      onLoad={() => setLoaded(true)}
                      loading="lazy"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};
