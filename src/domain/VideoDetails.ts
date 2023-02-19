export interface VideoDetailsMap {}

export type VideoType = keyof VideoDetailsMap;

export type AnyVideoDetails = VideoDetailsMap[VideoType];

export type Video = {
  id: string;
  type: VideoType;
};

export type VideoDetails<Type extends VideoType> = Video & {
  type: Type;
  title: string;
  previewUrl: string;
  description: string;
};

export const isVideoDetails = (value: any): value is VideoDetails<VideoType> =>
  value != null && //
  typeof value.type === "string" && //
  typeof value.previewUrl === "string";
