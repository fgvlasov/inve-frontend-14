import { useEffect, useCallback } from 'react';

export const useSlidesTinting = (swiperRef) => {
  // Memoize the tintLastElement function using useCallback
  const tintLastElement = useCallback(() => {
    const width = window.innerWidth;
    const { slides } = swiperRef.current;
    slides.forEach((slide) => slide.children[0].classList.remove('opacity-60'));
    const visibleSlides = slides
      .filter((slide) => slide.getBoundingClientRect().x <= width)
      .sort((a, b) => a.x - b.x);

    const lastVisibleSlide = visibleSlides[visibleSlides.length - 1];
    lastVisibleSlide.children[0].classList.add('opacity-60');
    lastVisibleSlide.children[0].style.borderColor = 'red';
  }, [swiperRef]); // Add swiperRef as a dependency

  const handleTransitionEnd = useCallback(() => {
    // console.log('slider transition end');
    tintLastElement();
  }, [tintLastElement]); // Add tintLastElement as a dependency

  useEffect(() => {
    tintLastElement();

    window.addEventListener('resize', tintLastElement);
    return () => {
      window.removeEventListener('resize', tintLastElement);
    };
  }, [tintLastElement]); // Add tintLastElement as a dependency

  return { onTransitionEnd: handleTransitionEnd };
};
