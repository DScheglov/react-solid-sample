import { useCardComponents } from "../../context-defs/cardComponents";
import { RecordedVideoDetails } from "../domain";

type RecordedVideoFooterProps = Pick<RecordedVideoDetails, "recordedAt">;

const RecordedVideoFooter = ({ recordedAt }: RecordedVideoFooterProps) => {
  const { Footer } = useCardComponents();
  return (
    <Footer>
      <small className="text-muted">
        Ended at {recordedAt.toLocaleDateString()}{" "}
        {recordedAt.toLocaleTimeString()}
      </small>
    </Footer>
  );
};

export default RecordedVideoFooter;
