import TitleH3 from "./TitleH3";
import { getStrapiMedia } from "@/lib/media";
import Link from "next/link";
import DescriptionServiceItem from "./DescriptionServiceItem";
import Image from "next/image";

const BLUR_DATA_URL =
  "data:image/svg+xml;base64," +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
      <rect width="10" height="10" fill="#111827"/>
    </svg>`,
  ).toString("base64");

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
}: {
  title: string;
  subtitle?: string;
  textPart1?: string;
  textPart2?: string;
  textPart3?: string;
  textPart4?: string;
  link: string;
  centered?: boolean;
  image?: unknown;
}) {
  const src = image ? getStrapiMedia(image) : null;

  return (
    <div
      className='w-full h-[600px] mb-2.5 rounded-5xl relative
      md:mb-5
      lg:mb-0 lg:mr-7 lg:last-of-type:mr-0'
    >
      <Link href={link} className='flex h-full rounded-5xl'>
        <div className='w-full h-full z-10 p-9 rounded-5xl'>
          <TitleH3 text={title} subtext={subtitle ?? ""} />
          <DescriptionServiceItem textPart1={textPart1} textPart2={textPart2} textPart3={textPart3} textPart4={textPart4} />
        </div>

        {src ? (
          <div className='absolute top-0 bottom-0 left-0 right-0 lg:max-w-full lg:min-w-fit'>
            <Image
              src={src}
              alt={title}
              fill
              sizes='(max-width: 1024px) 100vw, 398px'
              className={`object-cover rounded-5xl ${centered ? "object-center" : "object-left-bottom"}`}
              placeholder='blur'
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        ) : null}
      </Link>
    </div>
  );
}
