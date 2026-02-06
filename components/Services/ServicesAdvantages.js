import { getStrapiMedia } from 'lib/media';
import EnumCircle from '../ui/EnumCircle';
import Line from '../ui/Line';

export default function ServicesAdvantages({ data }) {
  if (!data) {
    return;
  }
  return (
    <div className="container mt-13">
      <h2 className=" text-3.5xl text-black-russian3 font-arial font-normal mb-10 2xl:text-4xl">
        {data.Title}
      </h2>
      <div className="mb-10 flex flex-col md:mb-15 2xl:flex-row 2xl:mt-21 2xl:items-start 2xl:justify-between 2xl:mb-20">
        <ul className="list-none flex flex-wrap gap-5 2xl:gap-15 2xl:flex-col 2xl:pt-10">
          {data.Adv_1_text && (
            <li className="flex gap-5">
              <EnumCircle number="01" />
              <div className="mr-4">
                <h3 className="font-arial font-normal text-2xl leading-7 text-black">
                  {data.Adv_1_title}
                </h3>
                <p className="font-arial font-normal text-base leading-5 text-black opacity-60 w-full md:w-[340px] mt-5 2xl:w-[590px]">
                  {data.Adv_1_text}
                </p>
              </div>
            </li>
          )}
          {data.Adv_2_text && (
            <li className="flex gap-5">
              <EnumCircle number="02" />
              <div className="mr-4">
                <h3 className="font-arial font-normal text-2xl leading-7 text-black">
                  {data.Adv_2_title}
                </h3>
                <p className="font-arial font-normal text-base leading-5 text-black opacity-60 w-full md:w-[340px] mt-5 2xl:w-[590px]">
                  {data.Adv_2_text}  
                </p>
              </div>
            </li>
          )}
          {data.Adv_3_text && (
            <li className="flex gap-5">
              <EnumCircle number="03" />
              <div className="mr-4">
                <h3 className="font-arial font-normal text-2xl leading-7 text-black">
                  {data.Adv_3_title}
                </h3>
                <p className="font-arial font-normal text-base leading-5 text-black opacity-60 w-full md:w-[340px] mt-5 2xl:w-[590px]">
                  {data.Adv_3_text}    
                </p>
              </div>
            </li>
          )}
          {data.Adv_4_text && (
            <li className="flex gap-5 ">
              <EnumCircle number="04" />
              <div className="mr-4">
                <h3 className="font-arial font-normal text-2xl leading-7 text-black">
                  {data.Adv_4_title}
                </h3>
                <p className="font-arial font-normal text-base leading-5 text-black opacity-60 w-full md:w-[340px] mt-5 2xl:w-[590px]">
                  {data.Adv_4_text}
                </p>
              </div>
            </li>
          )}
        </ul>
        <div
          className="w-[100%] rounded-2xl h-[255px] bg-cover bg-no-repeat mt-10 md:h-[360px] md:mt-15  2xl:w-[858px] 2xl:h-[700px] 2xl:mt-0"
          style={{
            backgroundImage: `url(${getStrapiMedia(data.Adv_image)})`,
            backgroundPosition: 'center',
          }}
        />
      </div>
      <Line width="100%" variantColor="bg-light-grey" />
    </div>
  );
}
