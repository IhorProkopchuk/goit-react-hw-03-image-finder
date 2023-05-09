import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Modal = ({ activeImg, closeModal }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [closeModal]);

  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <img src={activeImg.largeImageURL} alt={activeImg.tags} onClick={handleImageClick}/>
      </div>
    </div>
  );
};

Modal.propTypes = {
  activeImg: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
