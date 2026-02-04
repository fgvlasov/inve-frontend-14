import { getStrapiMedia } from "lib/media";
import Image from "next/image";

export default function ServiceIntro({ title, text, image }) {
  return (
    <div
      className="pt-6 pb-15 lg:flex 
    container mx-auto"
    >
      {image && (
        <div className="lg:w-1/2 w-full  lg:order-2 lg:pl-25 flex-shrink-0 -mx-3.8 lg:mx-0">
          <img
            className="h-full aspect-[428/220] object-cover w-full
        lg:rounded-l15 lg:aspect-[858/320]"
            src={getStrapiMedia(image)}
            width="451"
            height="320"
            // q={100}
            loading="lazy"
            alt={title}
          />
        </div>
      )}

      <div className="pt-15 lg:w-1/2 w-full">
        <div className="text-base uppercase font-bold pb-9">{title}</div>
        <p
          className="leading-snug
        md:text-1xl"
        >
          {text}
        </p>
      </div>
    </div>
  );
}
