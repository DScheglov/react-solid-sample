import { StreamDetails } from "./domain";
import { delay } from "../utils/delay";
import * as fake from "./_fake_";

export const getStream = (id: string): Promise<StreamDetails> =>
  delay({ sec: 1 }).then(() => fake.Stream(id));
