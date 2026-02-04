import Link from "next/link";

export default function ProjectItemCarousel({ name, link, children }) {
  return (
    <div className="md:pb-[31px] lg:pb-3.8">
      {/* min-w-auto  md:min-w-[562px] */}
      <Link href={`/project/${link}`}>
        <div
          className="rounded-l15 relative p-5 mb-2.5 w-full
        lg:mb-0 lg:pb-50
        aspect-[288/147]
        md:aspect-[562/367]
        "
        >
          {children}
        </div>
        <h3
          className="text-black text-base tracking-tight pb-0 
		  underline
		  inline-block pt-[8px]
        md:text-2xl md:pt-7"
        >
          {/* border-b border-black-russian  */}
          {name}
        </h3>
      </Link>
    </div>
  );
}
