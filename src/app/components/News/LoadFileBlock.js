import { getStrapiMediaCarousel } from "lib/mediaCarousel";
import Link from "next/link";
import React from "react";

export const LoadFileBlock = ({ file }) => {
  return (
    <div className="container py-10.5  !max-w-screen-lg">
      <div className="bg-white p-7 pb-[36px] rounded-2.5xl flex justify-between">
        <p className="lowercase text-xl">{file?.attributes?.name}</p>
        <p className="pt-10 flex items-center justify-center ">
          <span className="uppercase opacity-50 pr-3">
            {file?.attributes?.ext?.substr(1)} {file?.attributes?.size}
            {" KB"}
          </span>
          <Link
            className="opacity-100 flex items-center justify-center "
            href={getStrapiMediaCarousel(file)}
            download={"file.pdf"}
            target="_blank"
          >
            <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
              >
                <circle
                  cx="19"
                  cy="19"
                  r="19"
                  transform="rotate(90 19 19)"
                  fill="#4574EF"
                />
                <path
                  d="M14 17.388L18.5 21.5M18.5 21.5L23 17.388M18.5 21.5L18.5 11"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
                <line
                  x1="14.75"
                  y1="25.25"
                  x2="22.25"
                  y2="25.25"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="square"
                />
              </svg>
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoadFileBlock;
