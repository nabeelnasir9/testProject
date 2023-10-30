/* eslint-disable react/prop-types */

import "../styles/Card.css";

function Card({ title, description, image, onClick, articleUrl }) {
  return (
    <div className="card" onClick={onClick}>
      {image && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{description}</p>
      {articleUrl && (
        <a href={articleUrl} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      )}
    </div>
  );
}

export default Card;
