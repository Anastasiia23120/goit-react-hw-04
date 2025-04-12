import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, alt, likes, userName, onClick }) => {
  return (
    <div className={css.imageCard}>
      <img className={css.imageItem} src={image} alt={alt} onClick={onClick} />
      <div className={css.infoContainer}>
        <p className={css.infoText}>Likes: {likes}</p>
        <p className={css.infoText}>Uploaded by: {userName}</p>
      </div>
    </div>
  );
};

export default ImageCard;
