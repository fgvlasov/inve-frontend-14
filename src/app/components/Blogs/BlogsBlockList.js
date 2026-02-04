import PillowLink from "@/components/ui/PillowLink";
import Article from "@/components/ui/Article";
import ButtonPagination from "@/components/ui/ButtonPagination";
import TitleColor from "../ui/TitleColor";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useTranslation from "next-translate/useTranslation";

import "swiper/css";
import Loading from "../ui/Loading";
import Title from "../ui/Title";

export default function BlogsBlockList({
  titleColor,
  articleColor,
  buttonColor,
  blogRes,
  titleOthers = false,
}) {
  const { t } = useTranslation("common");

  const swiperRef = useRef();
  const prevSlide = () => swiperRef.current.slidePrev();
  const nextSlide = () => swiperRef.current.slideNext();
  if (!blogRes) {
    return <Loading />;
  }

  return (
    <section
      className="text-white pt-18 pb-[38px] overflow-hidden container
    md:pb-20 md:pt-18
    lg:pb-25 lg:pt-29"
    >
      <div
        className="flex justify-between pb-10 items-center
        md:pb-15 lg:pb-18 "
      >
        {titleOthers ? (
          <Title text={t("news.title_other_news")} variant="black" />
        ) : (
          <TitleColor textPart1="Блог" textPart2=" invert" color={titleColor} />
        )}

        <div className="flex">
          <div onClick={prevSlide}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonPagination>
          </div>
          <div onClick={nextSlide}>
            <ButtonPagination variant={buttonColor}>
              <svg
                className='w-[9px] h-[15px] viewBox="0 0 9 15 rotate-180'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </ButtonPagination>
          </div>
        </div>
      </div>

      <Swiper
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={"auto"}
        scrollbar={{ draggable: true }}
        className="!pl-3.8 !-mr-[85px] flex  pb-7
        md:pb-10 md:gap-7
        lg:pb-9 "
      >
        {blogRes &&
          [...blogRes, ...blogRes].map((blog, key) => (
            <SwiperSlide className="max-w-[288px] sm:max-w-[526px] " key={key}>
              <Article
                image={blog.attributes.Image_preview}
                link={blog.attributes.slug}
                tag={blog.attributes.tag}
                title={blog.attributes.Title}
                text={blog.attributes.Preview}
                variant={articleColor}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="pt-7 md:pt-10 lg:pt-9">
        <PillowLink
          text={t("All_news")}
          link="/news"
          variant="dark"
          variantSvg="whiteSvg"
        />
      </div>
    </section>
  );
}
