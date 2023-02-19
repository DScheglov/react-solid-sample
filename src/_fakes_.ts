import { Video } from "./domain";
import { STREAM } from "./stream/domain";
import { RecordedVideo } from "./_fakes_";
import { Stream } from "./_fakes_";

export * from "./domain/_fakes_";
export * from "./recorded-video/_fake_";
export * from "./stream/_fake_";

export const extend = ({ id, type }: Video) =>
  type === STREAM ? Stream(id) : RecordedVideo(id);
