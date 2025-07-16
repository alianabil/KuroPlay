import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard({ title, images, link }) {
  return (
    <Link to={link} className="collection-card-link">
      <div className="collection-card">
        <div className="collection-images">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc || "/placeholder.svg"}
              alt={`Collection image ${index + 1}`}
              className={`collection-image image-${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
        <h3 className="collection-title">{title}</h3>
      </div>
    </Link>
  );
}

export default CollectionCard;
