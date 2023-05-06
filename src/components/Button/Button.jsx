import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ nextPage }) => {
  return (
    <button className={styles.button} type="button" onClick={nextPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};