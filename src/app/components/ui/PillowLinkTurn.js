import Link from "next/link";

const darkClasses =
  "bg-nero text-white hover:text-black hover:bg-white border-none";
const transparentClasses =
  "text-black bg-transparent hover:text-white hover:bg-nero border-none";

const blueClassesSvg = " bg-royal-blue text-white";
const whiteClassesSvg =
  "bg-white text-black group-hover:bg-royal-blue group-hover:text-white";
const darkClassesSvg =
  "bg-black text-white group-hover:bg-white group-hover:text-black";

export default function PillowLinkTurn({
  variant,
  text,
  link = "#",
  variantSvg = "whiteSvg",
}) {
  return (
    <Link
      href={link}
      className={`${
        variant == "dark" ? darkClasses : transparentClasses
      } py-2.5 w-max flex justify-center items-center rounded-6xl trans-default group border cursor-pointer mb-[8px]`}
    >
      <span
        className={`${
          variantSvg === "whiteSvg"
            ? whiteClassesSvg
            : variantSvg === "darkSvg"
            ? darkClassesSvg
            : blueClassesSvg
        } w-[37px] h-[37px] flex items-center justify-center rounded-full shrink-0 mr-5`}
      >
        <svg className='w-[9px] h-[15px] viewBox="0 0 9 15"'>
          <path
            d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="transparent"
          />
        </svg>
      </span>
      <span className="text-base tracking-tight">{text}</span>
    </Link>
  );
}
