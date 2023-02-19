import { StreamDetails } from "../domain";
import StreamFooter from "./StreamFooter";
import StreamDescription from "./StreamDescription";
import { useCardComponents } from "../../context-defs/cardComponents";

type StreamVideoCardProps = {
  video: StreamDetails;
};

const StreamVideoCard = ({ video }: StreamVideoCardProps) => {
  const { Card, Preview, Title } = useCardComponents();
  const { previewUrl, title } = video;

  return (
    <Card
      preview={<Preview url={previewUrl} alt={title} />}
      title={<Title>{title}</Title>}
      details={<StreamDescription {...video} />}
      footer={<StreamFooter {...video} />}
    />
  );
};

export default StreamVideoCard;
