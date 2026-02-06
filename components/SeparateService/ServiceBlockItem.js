import Image from "next/image";
import PillowLink from "../ui/PillowLink";

export default function ServiceBlockItem({ title, path }) {
  return (
    <div className="bg-white pt-9 rounded-5xl mb-10 relative">
      <h3 className="text-3xl ml-9 mb-12">{title}</h3>
      <img
        className="w-full rounded-b-5xl"
        src={path}
        width="398"
        height="466"
        alt=""
        // q={100}
        loading="lazy"
      />
      <div className="absolute bottom-9 left-9">
        <PillowLink
          text="Заказать"
          link="#"
          variant="white"
          variantSvg="blueSvg"
        />
      </div>
    </div>
  );
}
