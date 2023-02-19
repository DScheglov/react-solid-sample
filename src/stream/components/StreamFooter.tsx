import React from "react";
import { useCardComponents } from "../../context-defs/cardComponents";
import { StreamDetails } from "../../domain/StreamVideoDetails";

type StreamFooterProps = Pick<StreamDetails, "startedAt">;

const StreamFooter = ({ startedAt }: StreamFooterProps) => {
  const { Footer } = useCardComponents();
  return (
    <Footer>
      <small className="text-muted ms-1">
        Started at {startedAt.toLocaleTimeString()}
      </small>
    </Footer>
  );
};

export default StreamFooter;
