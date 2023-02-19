import VideoCard from "./components/VideoCard";
import { getVideo } from "./data-providers/video-data-provider";

import { RECORDED } from "./recorded-video/domain";
import { getRecordedVideo } from "./recorded-video/get-recorded-video";
import RecordedVideoCard from "./recorded-video/components/RecordedVideoCard";

import { STREAM } from "./stream/domain";
import { getStream } from "./stream/get-stream";
import StreamVideoCard from "./stream/components/StreamVideoCard";

VideoCard.mapVideoTypes({
  [RECORDED]: RecordedVideoCard,
  [STREAM]: StreamVideoCard
});

getVideo.mapVideoTypes({
  [RECORDED]: getRecordedVideo,
  [STREAM]: getStream
});
