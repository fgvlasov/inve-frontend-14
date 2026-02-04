import TitleH3 from "./TitleH3";
import { getStrapiMedia } from "lib/media";
import Image from "next/image";
import Link from "next/link";
import DescriptionServiceItem from "./DescriptionServiceItem";
import { useState } from "react"

export default function ServiceItem({
  title,
  subtitle,
  textPart1 = "",
  textPart2 = "",
  textPart3 = "",
  textPart4 = "",
  link,
  centered = false,
  image = "",
}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={`w-full h-[600px] mb-2.5 rounded-5xl relative
    md:mb-5
    lg:mb-0 lg:mr-7 lg:last-of-type:mr-0`}
    >
      <Link href={link} className="flex h-full rounded-5xl">
        {/* <div className="bg-nero3 w-full h-full z-10 p-9 rounded-5xl"> */}
        <div className="w-full h-full z-10 p-9 rounded-5xl">
          <TitleH3 text={title} subtext={subtitle} />
          <DescriptionServiceItem
            textPart1={textPart1}
            textPart2={textPart2}
            textPart3={textPart3}
            textPart4={textPart4}
          />
        </div>
        {image && (
          <div
            className="absolute top-0 bottom-0 left-0 right-0 
      lg:max-w-full lg:min-w-fit"
          >
            <img
              className={`object-cover w-full h-full rounded-5xl ${
                centered ? "object-center" : "object-left-bottom"
              }`}
              src={getStrapiMedia(image)}
              width={398}
              height={600}
              alt={title}
              loading="lazy"
              style={{
                filter: !loaded ? "blur(70px)" : "none",
                transition: "filter 0.2s ease-out",
              }}
              onLoad={() => setLoaded(true)}
            />
          </div>
        )}
      </Link>
    </div>
  );
}
