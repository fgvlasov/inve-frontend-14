import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  Pagination, 
  Thumbs,
  // Zoom 
  } from "swiper/modules";

// import { ImageZoomModal } from "../ImageZoomModal";
import Image from "next/image";
// import "swiper/css";

import { getStrapiURL } from "lib/api";
// import ModalImage from "@/components/ui/ModalImage";
// import { getStrapiMedia } from "lib/media";

export function getLink(media) {
  try {
    const { url } = media.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  } catch (error) {
    return undefined;
  }
}

export const SwiperPhotos = ({ poster, photos, verticalPhotos = false }) => {
  const photoSlides = photos || [];
  //const slides = poster ? [poster, ...photoSlides] : photoSlides;
  const slides = photoSlides;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [openZoom, setOpenZoom] = useState(false);
  const [current, setCurrent] = useState();
  const [showPagination, setShowPagination] = useState(true);
  const [loaded, setLoaded] = useState(false)
  const updatePaginationVisibility = () => {
    setShowPagination(window.innerWidth < 768);
  };

  useEffect(() => {
    updatePaginationVisibility();

    // Update visibility on window resize
    window.addEventListener("resize", updatePaginationVisibility);

    return () => {
      window.removeEventListener("resize", updatePaginationVisibility);
    };
  }, []);
  const slidesCount = verticalPhotos ? 1.8 : 1.1;
  //This is for Mobile screens
  const renderSwiperWithPagination = () => {
    return (
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        className="mySwiper"
        autoHeight={true}
        loop
        modules={[Thumbs, Pagination]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={showPagination ? { clickable: true, dynamicBullets: true } : null}
        breakpoints={{
          768: {
            slidesPerView: slidesCount,
          },
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
            }}
          >
            <div className="min-h-[450px] px-4">
            <Image
                className="w-full h-full rounded-l15 object-cover"
                style={{
                  filter: !loaded ? "blur(70px)" : "none",
                  transition: "filter 0.2s ease-out",
                }}
                fill
                src={getLink(photo)}
                alt="Project name"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  //This is for Large screens
  const renderSwiperWithoutPagination = () => {
    return (
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        className="mySwiper lg:container swiperLarge"
        autoHeight={true}
        loop
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        breakpoints={{
          768: {
            slidesPerView: slidesCount,
          },
        }}
      >
        {slides.map((photo, index) => (
          <SwiperSlide
            key={index}
            onClick={() => {
              setCurrent(photo);
            }}
            className="h-[80vh]"
          >
            <Image
              className="w-full h-full rounded-l15 object-contain"
              src={getLink(photo)}
              fill
              alt="Project name"
              style={{
                filter: !loaded ? "blur(70px)" : "none",
                transition: "filter 0.2s ease-out",
              }}
              onLoad={() => setLoaded(true)}
              loading="lazy"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <>
      {showPagination
        ? renderSwiperWithPagination()
        : renderSwiperWithoutPagination()}

      {/* {current && (
        <ModalImage isOpen={openZoom} onClose={() => setOpenZoom(false)}>
          <Image
            width="1200"
            height={800}
            className="relative max-w-[90vw] h-auto object-cover rounded-lr "
            alt={current.attributes.name ? current.attributes.name : ""}
            src={getLink(current)}
            loading="lazy"
            style={{
              filter: !loaded ? "blur(70px)" : "none",
              transition: "filter 0.2s ease-out",
            }}
            onLoad={() => setLoaded(true)}
          />
        </ModalImage>
      )} */}

      {slides.length > 1 && !showPagination && (
        <div className="2xl:pt-12 xl:pt-12 lg:pt-7 pt-2 z-5 w-full mx-auto container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={setThumbsSwiper}
          >
            {slides.map((photo, index) => (
              <SwiperSlide key={index} style={{ flexShrink: 1 }}>
                <div className="rounded-lr w-[266px] h-[150px] overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
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
