import Image from "next/image";

export default function NewsSlide() {
  return (
    <div className="min-h-full">
      <img
        className="w-full h-full rounded-xl aspect-[275/187]"
        src="/image/content/new.png"
        width="275"
        height="187"
        alt=""
        // q={100}
        loading="lazy"
      />
    </div>
  );
}
