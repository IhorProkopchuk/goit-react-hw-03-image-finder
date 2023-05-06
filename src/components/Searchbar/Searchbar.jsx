import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles['searchForm--button']}>
          <span className={styles['searchForm--button-label']}>Search</span>
        </button>

        <input
          name="input"
          className={styles['searchForm--input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};