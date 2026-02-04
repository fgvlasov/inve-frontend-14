import { getStrapiURL } from "lib/api";
import React, { useEffect, useRef, useState } from "react";

export function getLink(media) {
  try {
    const { url } = media.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  } catch (error) {
    return undefined;
  }
}

export const VideoPlayer = ({
  poster,
  videofile,
  small = false,
  stop = false,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = (e) => {
    // e.stopPropagation()
    if (small) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    videoRef.current.pause();
    setIsPlaying(false);
  }, [stop]);


  return (
    <div
      className="w-full h-full relative rounded-lr overflow-hidden"
    >
      <div className="absolute bottom-15 w-full h-full z-10" onClick={handlePlay} />
      {/* <div className="absolute bottom-8 left-2 w-10 h-10 z-10" onClick={handlePlay} /> */}
      <video	
        ref={videoRef}
        poster={getLink(poster)}
        controls
        className="w-full h-full"
      >
        <source src={getLink(videofile)} type="video/mp4" />
        <p>
          Ваш браузер не поддерживает встроенные видео. Попробуйте скачать его
          по
          <a href="#">этой ссылке</a>.
        </p>
      </video>
      {small ? (
        <div className="absolute top-0 opacity-0 w-full h-full z-10">
          <div
            className={`absolute top-1/2 left-1/2 -translate-y-5 -translate-x-2
          ${small ? "" : "md:-translate-y-10 md:-translate-x-5"}
        `}
          >
            <svg
              viewBox="0 0 36 43"
              className={`w-[36px] h-[43px] cursor-pointer ${small ? "" : "md:w-[86px] md:h-[86px]"
              } `}
            >
              <path
                d="M33.4217 17.2697C36.5342 19.231 36.5342 23.7688 33.4217 25.7301L7.85702 41.8395C4.52747 43.9376 0.191389 41.5448 0.191389 37.6093L0.19139 5.39047C0.191391 1.45501 4.52746 -0.937803 7.85701 1.16029L33.4217 17.2697Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      ) : (
        !isPlaying && (
          <div
            className={`absolute top-1/2 left-1/2 -translate-y-5 -translate-x-2
          ${small ? "" : "md:-translate-y-10 md:-translate-x-5"}
        `}
          >
            <svg
              viewBox="0 0 36 43"
              className={`w-[36px] h-[43px] cursor-pointer ${small ? "" : "md:w-[86px] md:h-[86px]"
              } `}
            >
              <path
                d="M33.4217 17.2697C36.5342 19.231 36.5342 23.7688 33.4217 25.7301L7.85702 41.8395C4.52747 43.9376 0.191389 41.5448 0.191389 37.6093L0.19139 5.39047C0.191391 1.45501 4.52746 -0.937803 7.85701 1.16029L33.4217 17.2697Z"
                fill="white"
              />
            </svg>
          </div>
        )
      )}
    </div>
  );
};