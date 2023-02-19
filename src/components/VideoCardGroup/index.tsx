import { useVideos } from "../../context-defs/videos";
import { AnyVideoDetails } from "../../domain";
import CardGroup, { CardGroupProps } from "../CardGroup";
import VideoCard from "../VideoCard";

export type VideoCardGroupProps = {
  direction?: CardGroupProps["direction"];
  videos?: AnyVideoDetails[];
};

const VideoCardGroup = (props: VideoCardGroupProps) => {
  const ctxVideos = useVideos();
  const videos = props.videos ?? ctxVideos;

  return (
    <CardGroup direction={props.direction}>
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </CardGroup>
  );
};

export default VideoCardGroup;
