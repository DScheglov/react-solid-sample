import React from "react";
import { VideoDetailsMap, VideoType } from "../../domain";
import { raise } from "../../utils/raise";

export type VideoCardProps<T extends VideoType> = {
  video: VideoDetailsMap[T];
};

export type VideoCardComponent<T extends VideoType> = React.FC<
  VideoCardProps<T>
>;

type VideoCardComponentMap = {
  [T in VideoType]: React.FC<VideoCardProps<T>>;
};

let videoCardComponents: VideoCardComponentMap | null = null;

const VideoCard = <T extends VideoType>({ video }: VideoCardProps<T>) => {
  if (videoCardComponents == null) {
    raise(ReferenceError, `Video Types are not mapped to VideoCard components`);
  }

  const CardComponent = videoCardComponents[video.type] as React.FC<
    VideoCardProps<T>
  >;

  return <CardComponent video={video} />;
};

VideoCard.mapVideoTypes = (map: VideoCardComponentMap) => {
  videoCardComponents = map;
};

export default VideoCard;
