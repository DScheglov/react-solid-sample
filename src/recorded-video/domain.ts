import { VideoDetails, isVideoDetails } from "../domain/VideoDetails";

export const RECORDED = "recorded" as const;

export type RECORDED_URI = typeof RECORDED;

export type RecordedVideoDetails = VideoDetails<RECORDED_URI> & {
  recordedAt: Date;
};

declare module "../domain/VideoDetails" {
  export interface VideoDetailsMap {
    [RECORDED]: RecordedVideoDetails;
  }
}

export const isRecordedVideo = (value: any): value is RecordedVideoDetails =>
  isVideoDetails(value) && value.type === RECORDED;
