"use client";
import Loading from "@/components/ui/Loading";

export default function ProjectItemImage({ link, width, height, variant }) {
  if (!link) return <Loading />;

  const handleLoad = (e) => {
    // снимаем blur после загрузки картинки
    e.currentTarget.style.filter = "none";
  };

  const img = (
    <img
      className='w-full h-full object-cover rounded-l15'
      style={{
        filter: "blur(70px)",
        transition: "filter 0.2s ease-out",
      }}
      src={link}
      width={width}
      height={height}
      alt='Project image'
      loading='lazy'
      onLoad={handleLoad}
    />
  );

  if (variant === "imageBlock") {
    return <div className='absolute top-0 bottom-0 left-0 right-0'>{img}</div>;
  }

  return (
    <div
      className='absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-1/2 md:top-[45%]'
      style={{ width: typeof width === "number" ? `${width}px` : undefined }}
    >
      {img}
    </div>
  );
}
