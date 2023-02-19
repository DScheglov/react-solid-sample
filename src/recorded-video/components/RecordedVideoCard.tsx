import RecordedVideoFooter from "./RecordedVideoFooter";
import { useCardComponents } from "../../context-defs/cardComponents";
import { RecordedVideoDetails } from "../domain";

type RecordedVideoCardProps = {
  video: RecordedVideoDetails;
};

const RecordedVideoCard = ({ video }: RecordedVideoCardProps) => {
  const { Card, Preview, Title, Details } = useCardComponents();
  const { previewUrl, title, description } = video;

  return (
    <Card
      preview={<Preview url={previewUrl} alt={title} />}
      title={<Title>{title}</Title>}
      details={<Details>{description}</Details>}
      footer={<RecordedVideoFooter {...video} />}
    />
  );
};

export default RecordedVideoCard;
