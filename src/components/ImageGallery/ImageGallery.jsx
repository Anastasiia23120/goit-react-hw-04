import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <div>
      <ul className={css.galleryList}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard
              image={item.urls.small}
              alt={item.alt_description}
              likes={item.likes}
              userName={item.user.name}
              onClick={() => onImageClick(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
