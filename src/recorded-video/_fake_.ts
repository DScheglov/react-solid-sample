import { RecordedVideoDetails } from "./domain";

export const RecordedVideo = (id: string): RecordedVideoDetails => ({
  id,
  title: `Video #${id.replace(/[^\d]/g, "")}`,
  type: "recorded",
  previewUrl:
    "http://www.thegoutkiller.com/wp-content/uploads/2018/10/v_review.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Vestibulum neque neque, lacinia eu ex id, elementum congue arcu. " +
    "Pellentesque vulputate venenatis porta. " +
    "Morbi scelerisque sem vel rutrum tempor.",
  recordedAt: new Date("2023-02-18T16:10:00")
});
