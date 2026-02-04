import { getStrapiMedia } from 'lib/media';

export default function ServicesVideo({image}) {
  return (
    <section className="container w-full lg:px-[87px] mt-7 md:mt-4 lg:mt-7">
      <div className="relative">
        <video
          className="bg-cover w-full h-[400px] lg:h-[740px]  block"
          style={{
            backgroundImage: `url(${getStrapiMedia(image)})`,
            backgroundPosition: 'center',
          }}
        ></video>

        <img
          src="/image/svg/play_button.svg"
          alt=""
          className="w-[95px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </section>
  );
}
