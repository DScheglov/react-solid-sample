import { StreamDetails } from "./domain";

const startedAt = new Date();

export const Stream = (id: string): StreamDetails => ({
  id,
  title: `Stream #${id.replace(/[^\d]/g, "")}`,
  type: "stream",
  previewUrl:
    "https://images.sharefaith.com/images/3/1644850579123_3/slide-02.jpg",
  description:
    "Integer id augue ac mi varius tempus. " +
    "Nam ligula felis, facilisis vel turpis nec, scelerisque congue est. " +
    "Donec suscipit, lacus id tristique vehicula, turpis quam elementum mi, " +
    "ut ultrices purus.",
  watching: Math.ceil(Math.random() * 10000),
  startedAt
});
