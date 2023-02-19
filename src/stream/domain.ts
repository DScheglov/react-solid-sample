import { VideoDetails, isVideoDetails } from "../domain/VideoDetails";

export const STREAM = "stream" as const;

export type STREAM_URI = typeof STREAM;

export type StreamDetails = VideoDetails<STREAM_URI> & {
  watching: number;
  startedAt: Date;
};

declare module "../domain/VideoDetails" {
  export interface VideoDetailsMap {
    [STREAM]: StreamDetails;
  }
}

export const isStream = (value: any): value is StreamDetails =>
  isVideoDetails(value) && value.type === STREAM;
