'use client';

import classNames from 'classnames';
import { useSlidesTinting } from 'lib/useSlidesTinting';
import { useRef } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

function SlidePaginationButton({ onClick, direction }) {
  return (
    <div
      className={classNames(
        'relative rounded-full w-10 h-10 md:w-15 md:h-15 2xl:w-9 2xl:h-9 cursor-pointer block z-10 select-none',
        {
          'bg-blue': !direction,
          'bg-white': direction,
        }
      )}
      onClick={onClick}
    >
      <img
        src={
          direction ? '/image/svg/arrow-left.svg' : '/image/svg/arrow-right.svg'
        }
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
}

export default function OtherServicesSlider({ items }) {
  const swiperRef = useRef();
  const prevSlide = () => swiperRef.current.slidePrev();
  const nextSlide = () => swiperRef.current.slideNext();
  const { onTransitionEnd } = useSlidesTinting(swiperRef);

  return (
    <div className="relative">
      <div className="absolute gap-4 -top-6 right-4 md:-top-14 hidden md:flex">
        <SlidePaginationButton onClick={prevSlide} direction={true} />
        <SlidePaginationButton onClick={nextSlide} direction={false} />
      </div>
      <Swiper
        loop={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onTransitionEnd={onTransitionEnd}
        slidesPerView={'auto'}
        scrollbar={{ draggable: true }}
        className="flex gap-2 md:gap-8 mt-10"
      >
        {items?.map((item, key) => (
          <SwiperSlide
            className="md:max-w-[560px] md:max-h-[350px] max-w-[350px] max-h-[526px] rounded-5xl overflow-hidden mr-2 md:mr-8"
            key={key}
          >
            <div
              className="bg-cover rounded-5xl w-[350px] h-[526px] p-9 md:w-[560px] md:h-[350px] duration-500"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'center',
              }}
            >
              <h1 className="text-white w-[283px] font-arial font-normal text-1xl leading-8">
                {item.title}
              </h1>
              <p className="text-white mt-8 w-[240px]">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
