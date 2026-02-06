import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { 
  Pagination, 
  Thumbs
  } from "swiper/modules"
import Image from "next/image"

import { getStrapiURL } from "lib/api"

export function getLink(media) {
  try {
    const { url } = media.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  } catch (error) {
    return undefined;
  }
}

export const SwiperMedia = ({ poster, photos}) => {
  const slides = photos || []
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState();

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}        
        loop={true}
        modules={[Thumbs, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.1,
          },
        }}
        autoHeight={true}
        lazy={true}
        className="container mx-auto !px-4 overflow-hidden"   
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
            }}
          >
            <div className="min-h-[250px] md:h-[80vh]">
            <Image
              className="w-full h-full rounded-2xl object-contain"
              style={{
                filter: !loaded ? "blur(70px)" : "none",
                transition: "filter 0.2s ease-out",
              }}
              width={1920}
              height={1080}
              src={getLink(photo)}
              alt="Project name"
              onLoad={() => setLoaded(true)}
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.length > 1 && (
        <div className="container mx-auto !pt-5 hidden md:block overflow-hidden">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={setThumbsSwiper}
          >
            {slides.map((photo, index) => (
              <SwiperSlide 
                key={index}
                style={{ flexShrink: 1 }}
              >
                <div className="rounded-l15 w-[266px] h-[150px]">
                  <Image
                    className="w-full h-full object-cover rounded-l15"
                    width={266}
                    height={150}
                    alt={photo.attributes.name}
                    src={getLink(photo)}
                    style={{
                      filter: !loaded ? "blur(70px)" : "none",
                      transition: "filter 0.2s ease-out",
                    }}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};
