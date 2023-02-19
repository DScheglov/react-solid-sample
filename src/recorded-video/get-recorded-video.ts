import { RecordedVideoDetails } from "./domain";
import * as fake from "./_fake_";
import { delay } from "../utils/delay";

export const getRecordedVideo = (id: string): Promise<RecordedVideoDetails> =>
  delay({ sec: 1 }).then(() => fake.RecordedVideo(id));
