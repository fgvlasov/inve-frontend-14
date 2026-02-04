import { getStrapiMedia } from 'lib/media';

export default function ServicesChoice({ data }) {
  if (!data) {
    return;
  }
  return (
    <div className="container py-15">
      <div className="2xl:flex 2xl:flex-wrap 2xl:gap-7">
        <h2 className="text-3.5xl leading-[30px] text-black-russian3 font-arial font-normal mb-10 2xl:text-4xl 2xl:leading-10 2xl:w-[543px] 2xl:h-[500px] 2xl:mb-0 2xl:pt-24">
          {data.Title}
        </h2>
        <div
          style={{
            backgroundImage: `url(${getStrapiMedia(data.Why_1_image)})`,
            backgroundPosition: "center",
          }}
          className="w-full h-[200px] mt-[10px] rounded-2xl md:h-[350px] 2xl:w-[543px] 2xl:h-[500px] 2xl:mt-0 bg-cover"
        />
        <div className="py-10 pl-10 mt-[10px] 2xl:mt-0 bg-white rounded-2xl w-full 2xl:w-[543px] 2xl:h-[500px]">
          <span className="block w-5 h-5  bg-blue rounded-full"></span>
          <div className="text-3.5xl text-blue font-interTight leading-9 font-medium mt-5 mb-[74px]">
            {data.Why_1_title}
          </div>
          {data.Why_1_title_mini && (
            <div className="text-xl text-[#11111] font-interTight leading-6 font-medium mb-5">
              {data.Why_1_title_mini}
            </div>
          )}
          <p className="whitespace-pre-wrap font-arial text-black text-base leading-5 w-full md:w-[400px]">
            {data.Why_1_text}
          </p>
        </div>

        <div className="py-10 pl-10 bg-white rounded-2xl w-full mt-[10px] 2xl:w-[543px] 2xl:h-[500px] 2xl:mt-0">
          <span className="block w-5 h-5 bg-blue rounded-full"></span>
          <div className="text-3.5xl text-blue font-interTight leading-9 font-medium mt-5 mb-[74px]">
            {data.Why_2_title}
          </div>
          {data.Why_2_title_mini && (
            <div className="text-xl text-[#11111] font-interTight leading-6 font-medium mb-5">
              {data.Why_2_title_mini}
            </div>
          )}
          <p className="whitespace-pre-wrap font-arial text-black text-base leading-5 w-full md:w-[400px]">
            {data.Why_2_text}
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${getStrapiMedia(data.Why_2_image)})`,
            backgroundPosition: "center",
          }}
          className="w-full bg-cover h-[200px] mt-[10px] rounded-2xl md:h-[350px] 2xl:w-[543px] 2xl:h-[500px] 2xl:mt-0"
        />
      </div>
    </div>
  );
}
