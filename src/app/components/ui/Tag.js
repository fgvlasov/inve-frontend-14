import { usePathname } from "next/navigation";

export default function Tag({ variant = "white", text, href = "", usedFor = "" }) {
  const pathname = usePathname();
  const cancelPropagation = (e) => {
    e.preventDefault();
    pathname.push(`/portfolio/${href}`);
  };
  return (
    <div onClick={cancelPropagation}>
      {text && (
        <div
          className={`bg-${variant} cursor-pointer rounded-full inline-flex items-center px-3.8 ${
            usedFor === "blog" ? "w-auto self-start absolute left-5 bottom-5 py-2" : " relative z-3 px-1.5 py-[7px] uppercase w-fit"
          }`}
        >
          <span className={`text-l bold pr-1 text-${variant === "white" ? "blue" : "white"}`}>{"# "}</span>
          <p className={`text-xxs text-${variant === "white" ? "black" : "white"}`}> {text}</p>
        </div>
      )}
    </div>
  );
}
