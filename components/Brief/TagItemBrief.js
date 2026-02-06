const white = "bg-white text-black";
const blue = "bg-royal-blue text-white";

export default function TagItemBrief({
  text,
  color = "white",
  onClick,
  className = "",
}) {
  return (
    <div
      className={`${
        color === "white" ? white : blue
      } w-fit rounded-full px-6 py-4 flex items-center cursor-pointer flex-shrink-0 mb-3.8 mr-2.5
      md:mb-5 md:mr-5 ${className}`}
      onClick={onClick}
    >
      <p className="text-baseHeight text-inherit font-medium">{text}</p>
    </div>
  );
}
