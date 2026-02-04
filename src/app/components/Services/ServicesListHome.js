import Title from '@/components/ui/Title';
import ServiceItem from '@/components/ui/ServiceItem';
import PillowLink from '@/components/ui/PillowLink';
import FormService from '@/components/ui/FormService';
import useTranslation from 'next-translate/useTranslation';
import Loading from '../ui/Loading';

export default function ServicesListHome({ services }) {
  const { t } = useTranslation('common');
  const i18n = useTranslation();
  const locale = i18n.lang;
  if (!services) {
    <Loading />;
  }

  return (
    <section
      className="container px-4 pt-10 pb-18 
    md:pb-25 md:pt-[77px] 
    lg:px-10 lg:pb-34
    xl:px-20 xl:pt-[72px]"
    >
      <div className="flex items-center pb-15 md:pb-9 lg:mb-24.5">
        <svg className="mr-5" width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M13.125 30L13.125 -1.63918e-07L16.875
           0L16.875 30L13.125 30Z"
            fill="#4574EF"
          />
          <path
            d="M3.27835e-07 13.125L30 13.125L30 16.875L0 16.875L3.27835e-07 13.125Z"
            fill="#4574EF"
          />
          <path
            d="M3.06874 24.2808L24.2819 3.06759L26.9336 5.71924L5.72039 26.9324L3.06874 24.2808Z"
            fill="#4574EF"
          />
          <path
            d="M24.2803 26.9325L3.0671 5.71928L5.71875 3.06763L26.932 24.2808L24.2803 26.9325Z"
            fill="#4574EF"
          />
          <path
            d="M24.2803 26.9325L3.0671 5.71928L5.71875 3.06763L26.932 24.2808L24.2803 26.9325Z"
            fill="#4574EF"
          />
        </svg>
        <Title text={t('services.mainServices')} />
        <div className="hidden lg:block ml-auto">
          <PillowLink
            text={t('services.allServices')}
            link={'/services'}
            variant="dark"
            variantSvg="whiteSvg"
          />
        </div>
      </div>

      <div className="lg:flex">
        {services.map((service, i) => (
          <ServiceItem
            key={i}
            title={service.attributes.name}
            textPart1={service.attributes.textPart1}
            textPart2={service.attributes.textPart2}
            subtitle=""
            link={
              //`${i18n.lang}/services/${service.attributes.slug}`
              `/services/${service.attributes.slug}`
            }
            descriptionItem1={service.attributes.text}
            image={service.attributes.image}
            centered={false}
          />
        ))}
      </div>
      <FormService />
    </section>
  );
}
