'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import EnumCircle from '../ui/EnumCircle.js';
import { useSlidesTinting } from 'lib/useSlidesTinting.js';

function SlidePaginationButton({ onClick, direction }) {
  return (
    <div
      className={classNames(
        'relative rounded-full w-10 h-10 md:w-15 md:h-15 lg:w-9 lg:h-9 cursor-pointer block z-10 select-none',
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

export default function WorkPlanSlider({ items }) {
  const swiperRef = useRef();
  
  const { onTransitionEnd } = useSlidesTinting(swiperRef);

  const prevSlide = () => swiperRef.current.slidePrev();
  const nextSlide = () => swiperRef.current.slideNext();

  return (
    <div className="relative">
      <div className="absolute gap-4 -top-6 right-4 md:-top-25 hidden md:flex">
        <SlidePaginationButton onClick={prevSlide} direction={true} />
        <SlidePaginationButton onClick={nextSlide} direction={false} />
      </div>
      <Swiper
        // onSlideChange={handleSliderChange}
        onTransitionEnd={onTransitionEnd}
        loop={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // console.log(swiperRef);
        }}
        slidesPerView={'auto'}
        scrollbar={{ draggable: true }}
        className="flex gap-2 md:gap-8 relative !-mr-[0.9375rem] md:!-mr-[85px]"
      >
        {items?.map((item, key) => (
          <SwiperSlide
            className="max-w-[350px] max-h-[337px] md:max-w-[560px] md:max-h-[301px] mt-6 rounded-5xl overflow-hidden mr-2 lg:mr-8"
            key={key}
          >
            <div className="bg-white rounded-2xl p-10 w-[350px] h-[337px] md:w-[560px] md:h-[301px] duration-500">
              <EnumCircle number={(key + 1).toString().padStart(2, '0')} />
              <h3 className="text-black font-arial font-normal text-1xl leading-8 mt-5">
                {item.title}
              </h3>
              <p className="text-black opacity-60 font-arial font-normal text-base mt-7 w-[253px] md:w-[410px] leading-[19.2px]">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
