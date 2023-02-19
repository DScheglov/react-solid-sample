import { useCardComponents } from "../../context-defs/cardComponents";
import { StreamDetails } from "../domain";

const StreamDescription = ({ watching, description }: StreamDetails) => {
  const { Details } = useCardComponents();

  return (
    <Details>
      {description}
      <hr />
      <span className="badge text-bg-danger">Live</span>
      <small className="text-muted ms-2">Watching: {watching}</small>
    </Details>
  );
};

export default StreamDescription;
