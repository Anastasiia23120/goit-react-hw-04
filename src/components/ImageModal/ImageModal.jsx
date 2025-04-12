import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { RxCross2 } from "react-icons/rx";

const ImageModal = ({ isOpen, onRequestClose, imageUrl, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <button className={css.closeBtn} onClick={onRequestClose}>
        <RxCross2 />
      </button>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={alt || "Modal image"}
          className={css.modalImage}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
