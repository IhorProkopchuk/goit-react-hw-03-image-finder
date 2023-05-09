import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../api/fetchImage';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from '../components/Loader/Loader';

import styles from './App.module.css';

export class App extends Component {
  state = {
    query: '',
    images: [],
    error: null,
    isLoading: false,
    page: 1,
    totalHits: 0,
    showModal: false,
    activeImg: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      this.resetState();
      await this.fetchImages(query, 1);
    } else if (prevState.page !== page && page !== 1) {
      await this.fetchImages(query, page);
    }
  }

  resetState = () => {
    this.setState({
      page: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const imgPixabay = await fetchImages(query, page);

      if (imgPixabay.totalHits > 0) {
        this.setState(({ images, page }) => ({
          images: [...images, ...imgPixabay.hits],
          totalHits: imgPixabay.totalHits,
        }));
      } else {
        this.setState({
          error: 'No images matching your search query',
        });
      }
    } catch {
      this.setState({ error: 'No pictures were founded' });
    }
    this.setState({ isLoading: false });
  };

  onSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.input;
    const query = value.trim();

    if (query === '') {
      this.setState({ error: 'Search field can not be empty' });
    } else {
      this.setState({ query, error: null });
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleImgClick = activeImg => {
    this.setState({ activeImg: { ...activeImg } });
    this.openModal();
  };

  render() {
    const { error, images, isLoading, showModal, activeImg } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader className={styles.loader} />}
        {showModal && (
          <Modal activeImg={activeImg} closeModal={this.closeModal} />
        )}
        {error && <div className={styles.error}>{error}</div>}
        {images && (
          <ImageGallery handleImgClick={this.handleImgClick} images={images} />
        )}
        {!isLoading &&
          !error &&
          images &&
          this.state.totalHits > images.length && (
            <Button nextPage={this.nextPage} />
          )}
      </>
    );
  }
}
