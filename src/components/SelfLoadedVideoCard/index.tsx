import { useCallback } from "react";
import { AnyVideoDetails, Video, VideoType } from "../../domain";
import DataLoader from "../DataLoader";
import VideoCard from "../VideoCard";
import { getVideo } from "../../data-providers";

type SelfLoadedVideoCardProps = {
  id: string;
  type: VideoType;
  component?: React.FC<{ video: AnyVideoDetails }>;
  loadVideo?: (video: Video) => Promise<AnyVideoDetails>;
};

const SelfLoadedVideoCard = ({
  id,
  type,
  loadVideo = getVideo,
  component: VideoComponent = VideoCard
}: SelfLoadedVideoCardProps) => (
  <DataLoader
    getData={useCallback(
      () => loadVideo({ id, type }), //
      [id, type] // eslint-disable-line react-hooks/exhaustive-deps
    )}
    render={(video) => <VideoComponent video={video} />}
  />
);

export default SelfLoadedVideoCard;
