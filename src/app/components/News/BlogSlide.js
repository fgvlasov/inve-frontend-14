import React from "react";
import Image from "next/image";
import { getStrapiMediaCarousel } from "lib/mediaCarousel";

export const BlogSlide = ({ photo }) => {
  return (
    <div className="rounded-lr  h-[187px] w-[275px] md:h-[421px] md:w-[619px] xl:h-[602px] xl:w-[859px] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        width="266"
        loading="lazy"
        height="151"
        alt={photo.attributes.name}
        src={getStrapiMediaCarousel(photo)}
      />
    </div>
  );
};

export default BlogSlide;
