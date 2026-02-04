import { getStrapiMedia } from 'lib/media';
import Link from 'next/link';

export default function ServicesThreePage({ service, items }) {
  
  return (
    <section
      className="container
     mt-10"
    >
      <div className="flex flex-col md:flex-row  justify-start gap-20 ">
        <div className="grow-0 w-[329px] xl:w-[494px] text-3.5xl leading-[30px] xl:text-4xl xl:leading-[46px] text-black-russian3 font-arial font-normal">
          Какие еще услуги мы <br />
          предоставляем
        </div>
        {service && (
          <div>
            {service.OtherServicesText1 && (
              <p className="whitespace-pre-wrap font-normal font-arial text-lg leading-[25px] text-black w-full mb-5  xl:w-[840px] xl:mb-7">
                {service.OtherServicesText1}
              </p>
            )}
            {service.OtherServicesText2 && (
              <p className="whitespace-pre-wrap font-normal font-arial text-base leading-[25px] text-black opacity-60 w-full xl:w-[840px]">
                {service.OtherServicesText2}
              </p>
            )}
          </div>
        )}
      </div>
      <div
        className="flex flex-col gap-4 mt-8 pb-6 md:flex-row md:overflow-hidden 
	lg:order-3 lg:w-full"
      >
        {items?.map((item, key) => (
          <div
            className="block rounded-5xl  w-full min-h-[219px] bg-no-repeat bg-cover bg-right   lg:min-w-fit
			  "
            key={key}
          >
            <Link href={`/services/${item.attributes.slug}`}>
              <div
                className="bg-cover rounded-5xl w-full md:min-w-[350px] p-9  h-[350px] duration-500"
                style={{
                  backgroundImage: `url(${getStrapiMedia(
                    item.attributes.image
                  )})`,
                  backgroundPosition: 'center',
                }}
              >
                {' '}
                <div className="text-white w-[283px] font-arial font-normal text-1xl leading-8">
                  {item.attributes.name}
                </div>
                <p className="whitespace-pre-wrap text-white mt-8 w-[240px]">
                  {item.attributes.textPart1}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );}