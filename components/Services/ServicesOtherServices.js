'use client';

import { useMediaQuery } from 'react-responsive';
import OtherServicesSlider from './OtherServicesSlider';
import classNames from 'classnames';

const sliderItems = [
  {
    title: 'Продуктовая 3D визуализация',
    description: 'Разработка визуализации вашего продукта',
    image: '/image/slide-test-img.png',
  },
  {
    title: 'Продуктовая 3D визуализация',
    description: 'Разработка визуализации вашего продукта',
    image: '/image/slide-test-img.png',
  },
  {
    title: 'Продуктовая 3D визуализация',
    description: 'Разработка визуализации вашего продукта',
    image: '/image/slide-test-img.png',
  },
  {
    title: 'Продуктовая 3D визуализация',
    description: 'Разработка визуализации вашего продукта',
    image: '/image/slide-test-img.png',
  },
  {
    title: 'Продуктовая 3D визуализация',
    description: 'Разработка визуализации вашего продукта',
    image: '/image/slide-test-img.png',
  },
  {
    title: 'Продуктовая 3D визуализация',
    description: 'Разработка визуализации вашего продукта',
    image: '/image/slide-test-img.png',
  },
];

function OtherServicesTexts({ className }) {
  return (
    <div className={className}>
      <p className='font-normal font-arial text-lg leading-[25px] text-black w-full mb-5 mt-15 xl:w-[840px] xl:mb-7'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <p className='font-normal font-arial text-base leading-[25px] text-black opacity-60 w-full xl:w-[840px]'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
    </div>
  );
}

export default function ServicesOtherServices() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  console.log('is desktop', isDesktop);

  return (
    <section className='mt-15 ml-4'>
      <div className='flex flex-row items-center justify-start gap-20'>
        <h1 className='grow-0 w-[329px] xl:w-[494px] text-3.5xl leading-[30px] xl:text-4xl xl:leading-[46px] text-black-russian3 font-arial font-normal'>
          Какие еще услуги мы <br />
          предоставляем
        </h1>
        <OtherServicesTexts
          className={classNames({
            hidden: !isDesktop,
          })}
        />
      </div>
      <div className='flex flex-col xl:flex-col-reverse xl:mt-10'>
        {/* <OtherServicesSlider items={sliderItems} /> */}

        <OtherServicesTexts
          className={classNames({
            hidden: isDesktop,
          })}
        />
      </div>
    </section>
  );
}
