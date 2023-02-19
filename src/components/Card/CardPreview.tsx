import { CardPreviewProps } from "../interfaces/CardPreviewProps";

const CardPreview = ({ url, alt }: CardPreviewProps) => (
  <img src={url} className="card-img-top" alt={alt} />
);

export default CardPreview;
