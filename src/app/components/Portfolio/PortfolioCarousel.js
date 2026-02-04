import PillowLink from '../ui/PillowLink';
import ProjectItemImage from '../ui/ProjectItemImage';
import Title from '../ui/Title';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectItemCarousel from './ProjectItemCarousel';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getStrapiMedia } from 'lib/media';
import useTranslation from 'next-translate/useTranslation';
import Tag from '../ui/Tag';
import Loading from '../ui/Loading';

export default function PortfolioCarousel({
  title = 'Смотреть портфолио',
  projects,
}) {
  const { t } = useTranslation('common');
  //console.log(projects);
  if (!projects) {
    return <Loading />;
  }
  return (
    <div
      className="container overflow-hidden pt-21 pb-18 flex flex-col gap-10 w-full
    md:flex-row flex-wrap justify-between  items-center max-w-[1746px] lg:mx-auto "
    >
      <Title text={title} variant="white" />
      <PillowLink
        variant="white"
        heightFit={true}
        text={t('All_projects')}
        variantSvg="blueSvg"
        link="/portfolio"
      />
      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        className="pb-7  w-full flex md:pb-10 md:gap-7 lg:pb-9"
        breakpoints={{
          768: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {/* !-mr-3.8 */}
        {projects.map((project) => (
          //   <SwiperSlide key={project.id} style={{ flexShrink: 1 }}>
          <SwiperSlide key={project.id}>
            <ProjectItemCarousel
              name={project.attributes.Title}
              link={project.attributes.slug}
            >
              <ProjectItemImage
                link={getStrapiMedia(project.attributes.Poster)}
                width="288"
                height="147"
                variant="imageBlock"
              />
              <div className="flex gap-2">
                {project.attributes.tags.data.length > 0 &&
                  project.attributes.tags.data.slice(0, 2).map((tag) => {
                    return <Tag key={tag.id} text={tag.attributes.Name} />;
                  })}
              </div>
            </ProjectItemCarousel>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
