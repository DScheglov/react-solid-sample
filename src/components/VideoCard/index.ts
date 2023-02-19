import VideoCard from "./VideoCard";

import { RECORDED } from "../../recorded-video/domain";
import RecordedVideoCard from "../../recorded-video/components/RecordedVideoCard";
import { STREAM } from "../../stream/domain";
import StreamVideoCard from "../../stream/components/StreamVideoCard";

VideoCard.mapVideoTypes({
  [RECORDED]: RecordedVideoCard,
  [STREAM]: StreamVideoCard
});


export default VideoCard;