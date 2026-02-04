import { getStrapiMedia } from "lib/media";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";

const colorInherit = "bg-white text-nero2";
const colorNero = "bg-nero";

export default function ArticleNew({
  link,
  image,
  tag,
  title,
  text,
  variant = "colorNero",
}) {
  return (
    <article
      className={`${variant == "nero" ? colorNero : colorInherit}
         rounded-l15 flex flex-col pb-10 mb-5
         md:pb-18
         lg:w-[31%] lg:mb-10`}
    >
      <div className="rounded-l15 w-full relative">
        <img
          className="rounded-l15 md:w-full object-cover"
          width="804"
          height="287"
          src={getStrapiMedia(image)}
          loading="lazy"
          alt={title}
        />
        {/* md:aspect-[804/287] */}
        {tag.data && (
          <Tag
            key={tag.data.attributes.Name}
            text={tag.data.attributes.Name}
            href={tag.data.attributes.slug}
            usedFor="blog"
          />
        )}
      </div>
      <div className="pl-5 pt-7 pr-12">
        <h3
          className="text-xl tracking-tight mb-6
          md:text-2xl"
        >
          <Link href={`blog/${link}`}>{title}</Link>
        </h3>
        <p
          className="text-baseHeight tracking-tight opacity-70
        md:pr-3.8"
        >
          <Link href={`blog/${link}`}>{text}</Link>
        </p>
      </div>
    </article>
  );
}
