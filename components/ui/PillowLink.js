import Link from "next/link";

export default function PillowLink({
  variant,
  text,
  linkPosition = "",
  heightFit = false,
  link = "#",
  variantSvg = "whiteSvg",
}) {
  if (linkPosition == "footer") {
    //console.log(variant, variantSvg, linkPosition);
  }
  let darkClasses,
    whiteClasses,
    blueClassesSvg,
    whiteClassesSvg,
    darkClassesSvg;

  if (linkPosition == "footer") {
    darkClasses =
      "bg-nero text-white hover:text-black hover:bg-white border-none";
    whiteClasses =
      "text-black bg-white hover:text-white hover:bg-nero border-white";

    blueClassesSvg = "bg-royal-blue text-white";
    whiteClassesSvg =
      "bg-black text-white group-hover:bg-white group-hover:text-black";
    darkClassesSvg =
      "bg-white text-black group-hover:bg-royal-blue group-hover:text-white";
  } else if (linkPosition == "header") {
    darkClasses =
      "bg-nero text-white hover:text-black hover:bg-white border-none";
    whiteClasses =
      "text-black bg-white hover:text-white hover:bg-nero border-white";

    blueClassesSvg = "bg-royal-blue text-white";
    whiteClassesSvg =
      "bg-white text-black group-hover:bg-royal-blue group-hover:text-white";
    darkClassesSvg =
      "bg-black text-white group-hover:bg-white group-hover:text-black";
  } else {
    darkClasses =
      "bg-nero text-white hover:text-black hover:bg-white border-none";
    whiteClasses =
      "text-black bg-white hover:text-white hover:bg-nero border-black";

    blueClassesSvg = "bg-royal-blue text-white";
    whiteClassesSvg =
      "bg-white text-black group-hover:bg-royal-blue group-hover:text-white";
    darkClassesSvg =
      "bg-black text-white group-hover:bg-white group-hover:text-black";
  }
  return (
    <Link
      href={link}
      className={`${
        variant == "dark" ? darkClasses : whiteClasses
      } ${heightFit && 'h-fit'} text-base tracking-tight pl-[24px] py-[4px] pr-[2px] w-max flex justify-center items-center rounded-6xl trans-default group border cursor-pointer`}
    >
      {text}
      <span
        className={`${
          variantSvg === "whiteSvg"
            ? whiteClassesSvg
            : variantSvg === "darkSvg"
              ? darkClassesSvg
              : blueClassesSvg
        } w-[37px] h-[37px] flex items-center justify-center rounded-full shrink-0 ml-12 mr-1`}
      >
        <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
          <path
            d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
      </span>
    </Link>
  );
}
