import { VideoPlayer } from "../VideoPlayer";

export default function SmallVideoSlide({ poster, videofile }) {
  return (
    <div className="w-[266px] h-[151px] rounded-lr overflow-hidden">
      <VideoPlayer poster={poster} videofile={videofile} small={true} />
    </div>
  );
}
