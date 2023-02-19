import { getVideo } from "./video-data-provider";

import { RECORDED } from "../recorded-video/domain";
import { getRecordedVideo } from "../recorded-video/get-recorded-video";

import { STREAM } from "../stream/domain";
import { getStream } from "../stream/get-stream";

getVideo.mapVideoTypes({
  [RECORDED]: getRecordedVideo,
  [STREAM]: getStream
});
