const white = "bg-white text-black";
const blue = "bg-royal-blue text-white";

export default function TagItemSection({ text, color = "white", onClick }) {
  return (
    <div
      className={`${
        color === "white" ? white : blue
      }   w-fit rounded-full px-[21px] py-[7px] mb-[7px] mr-2.5 flex items-center
    md:mb-5 md:mr-5 md:px-6 md:py-4.5 cursor-pointer flex-shrink-0`}
      onClick={onClick}
    >
      <p
        className={`${
          color === "white" ? blue : white
        } w-1.5 h-1.5 rounded-full mr-2.5`}
      ></p>
      <p
        className="text-xs text-inherit
      uppercase font-medium"
      >
        {text}
      </p>
    </div>
  );
}
