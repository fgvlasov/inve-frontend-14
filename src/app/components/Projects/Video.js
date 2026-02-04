import { getStrapiMedia } from "lib/media";
import { VideoPlayer } from "./VideoPlayer";

export default function Video({ poster, videofile, small = false }) {
  return (
    <div className='w-full relative'>
      {videofile?.data ? (
        <VideoPlayer poster={poster} videofile={videofile} small={small} />
      ) : (
        <img
          className='w-full rounded-lr h-full'
          src={getStrapiMedia(poster)}
          width='1064'
          height='604'
          //   q={100}
          loading='lazy'
          alt='Video poster'
        />
      )}
    </div>
  );
}
