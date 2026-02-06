import Link from "next/link";

export default function ProjectItemWork({ name, link, children }) {
  return (
    <div
      className="md:pb-[31px]
    lg:pb-3.8"
    >
      <Link href={`/project/${link}`}>
        <div
          className="rounded-l15 relative p-5 w-full mb-2.5 
        lg:mb-0 lg:pb-50
    aspect-[398/300]
    md:aspect-[804/400]
    lg:aspect-[858/560]"
        >
          {children}
        </div>
        <div
          className="text-xl text-black tracking-tight pb-0 border-b
        border-black-russian inline-block pt-[8px]
        md:text-1xl
        lg:pt-5"
        >
          {name}
        </div>
      </Link>
    </div>
  );
}
