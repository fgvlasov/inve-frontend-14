import { getStrapiMedia } from 'lib/media';
import Image from 'next/image';
import Link from 'next/link';
import Line from '@/components/ui/Line';
import ServicesDoc from '@/components/ui/ServicesDoc';

export default function ServicesAbout({ about, servicesAbout }) {

  return (
    <div className="relative w-full h-full">
      <section
        className=" relative z-10 bg-cover pb-10 no-repeat
      md:pb-0 bg-center"
      >
        <div
          className="container contPadding pt-[95px]
        md:pt-[132px] xl:grid xl:grid-cols-[2fr, 1fr] xl:grid-rows-2 xl:pt-24.5 
		gap-5  xl:pb-[136px]"
        >
          <h1
            className=" tracking-tight mb-25 flex flex-wrap items-baseline 
			md:mb-15 xl:justify-between xl:max-w-[887px] xl:self-start xl:mb-0 titleAbout"
          >
            <span
              className="w-full mb-3.8
              md:mb-2.5
          lg:mb-0"
            >
              {about.attributes.SloganPart1}
            </span>
            <span className="flex items-center flex-wrap lg:pt-3.8">
              {" "}
              <svg
                className="text-royal-blue shrink-0 w-[43px] h-[33px]
                md:w-auto md:h-auto md:mr-2.5
          lg:w-[60px] lg:mr-9"
                viewBox="0 0 52 52"
                width="52"
                height="52"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.2 9 51 26 34.2 43l-3.54-3.46 10.96-11.08H1v-4.92h40.62L30.66 12.46 34.2 9Z"
                  fill="#4574EF"
                />
              </svg>{" "}
              {about.attributes.SloganPart2}
            </span>
          </h1>

          <div
            className="w-full max-w-full ml-auto row-start-1 row-end-3 col-start-2 col-end-3
          xl:mt-[156px]
          md:pb-2.5 md:w-1/2
          xl:w-[400px]"
          >
            {servicesAbout
              .filter((item) => item.id === 1)
              .map((item) => (
                <Link
                  href={getStrapiMedia(item.attributes.Slides.Document)}
                  key={item.id}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  className="bg-blackRussian relative flex flex-col rounded-4xl p-[25px] w-[72%] aspect-square"
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
                    <img
                      src={getStrapiMedia(
                        item.attributes.imagePresentationLink
                      )}
                      width={389}
                      height={275}
                      //   quality={100}
                      loading="lazy"
                      className="w-full rounded-4xl h-full object-cover"
                      alt={item.attributes.name}
                    />
                  </div>

                  <div className="relative z-1 flex flex-col items-start h-full">
                    <ServicesDoc text="pdf" />
                    <h3 className="text-1xl max-w-min overflow-hidden">
                      {item.attributes.name}
                    </h3>
                    <div className="button-round bg-black-russian2 mt-auto shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                      >
                        <path d="M10 1 5.5 5 1 1" stroke="#fff" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="2"
                        viewBox="0 0 9 2"
                      >
                        <path stroke="#fff" d="M0 1.25h9" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}

            {servicesAbout
              .filter((item) => item.id === 3)
              .map((item) => (
                <Link
                  href={getStrapiMedia(item.attributes.Slides.Document)}
                  key={item.id}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-blackRussian relative 
          block rounded-4xl p-[25px] -mt-24.5 ml-auto min-h-[347px]
          md:-mt-[108px] w-[72%] aspect-[286/347] "
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0">
                    <Image
                      className="rounded-4xl w-full h-full"
                      src={getStrapiMedia(
                        item.attributes.imagePresentationLink
                      )}
                      width={286}
                      height={347}
                      loading="lazy"
                      alt={item.attributes.name}
                      //   q={100}
                    />
                  </div>
                  <div className="relative z-1 flex flex-col items-start h-full">
                    <ServicesDoc text="Showreel" />
                    <h3 className="text-1xl max-w-min ">
                      {item.attributes.name}
                    </h3>
                    {/* <div className="mt-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                      >
                        <circle
                          opacity="0.3"
                          cx="18.5"
                          cy="18.5"
                          r="18.5"
                          transform="rotate(90 18.5 18.5)"
                          fill="#27282E"
                        />
                        <path
                          d="M23.5 17.634C24.1667 18.0189 24.1667 18.9811 23.5 19.366L16.75 23.2631C16.0833 23.648 15.25 23.1669 15.25 22.3971L15.25 14.6029C15.25 13.8331 16.0833 13.352 16.75 13.7369L23.5 17.634Z"
                          fill="white"
                        />
                      </svg>
                    </div> */}
                  </div>
                </Link>
              ))}
          </div>

          <div
            className="hidden md:block  mx-auto pt-25 pb-15 
        col-start-1 col-end-3 row-start-2
        xl:self-end xl:m-0 xl:p-0"
          >
            <svg
              className="w-[15px] h-[71px] mx-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 71"
            >
              <path d="M8.5 0v70m0 0 7.5-7.3M8.5 70 1 62.7" stroke="#fff" />
            </svg>
          </div>
        </div>
        <div className="hidden md:block container">
          <Line variantColor="eclipse" />
        </div>
      </section>

      <video
        id="video-player"
        src={getStrapiMedia(about.attributes.Video)}
        autoPlay={true}
        loop={true}
        muted={true}
        poster="/image/videohive_poster.webp"
        className="absolute -z-100 inset-0 object-cover !h-full bg-black w-full"
      />

      {/*<BackgroundPlayer
        src={getStrapiMedia(about.attributes.Video)}
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        poster="/image/videohive_poster.webp"
        className="absolute -z-100 inset-0 object-cover !h-full bg-black"
      >
        <source src={getStrapiMedia(about.attributes.Video)} type="video/mp4" />
        <source src={getStrapiMedia(about.attributes.Video)} type="video/ogg" />
      </BackgroundPlayer>*/}
    </div>
  );
}
