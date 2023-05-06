import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imgUrl, tags, handleImgClick, largeImageURL }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        onClick={() => handleImgClick({ tags, largeImageURL })}
        src={imgUrl}
        alt={tags}
        className={styles.imageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  handleImgClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
