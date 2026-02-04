import EnumCircle from '../ui/EnumCircle';
import Line from '../ui/Line';

export default function ServicesWhatIs({ data }) {
  if (!data) {
    return;
  }
  return (
    <section className="container mb-29">
      <h2 className="text-3.5xl leading-[30px] text-black-russian3 font-arial font-normal mb-18 w-full md:w-[475px] lg:w-full lg:text-4xl lg:leading-10">
        {data.Title}
      </h2>
      <div className="flex flex-wrap gap-12 lg:gap-56">
        {data.What_is_1 && (
          <div className="flex flex-col">
            <EnumCircle number="01" className="mb-12" />
            <Line width="320px" variantColor="bg-light-grey" />
            <div className="text-xl leading-7 text-black font-arial font-normal mt-6 mb-5">
              {data.What_is_1_title}
            </div>
            <p className="text-base leading-5 text-black opacity-60 font-arial font-normal w-[full] md:w-[360px]">
              {data.What_is_1}
            </p>
          </div>
        )}
        {data.What_is_2 && (
          <div className="flex flex-col">
            <EnumCircle number="02" className="mb-12" />
            <Line width="320px" variantColor="bg-light-grey" />
            <div className="text-xl leading-7 text-black font-arial font-normal mt-6 mb-5">
              {data.What_is_2_title}
            </div>
            <p className="text-base leading-5 text-black opacity-60 font-arial font-normal w-[full] md:w-[360px]">
              {data.What_is_2}
            </p>
          </div>
        )}
        {data.What_is_3 && (
          <div className="flex flex-col">
            <EnumCircle number="03" className="mb-12" />
            <Line width="320px" variantColor="bg-light-grey" />
            <div className="text-xl leading-7 text-black font-arial font-normal mt-6 mb-5">
              {data.What_is_3_title}
            </div>
            <p className="text-base leading-5 text-black opacity-60 font-arial font-normal w-[full] md:w-[360px]">
              {data.What_is_3}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
