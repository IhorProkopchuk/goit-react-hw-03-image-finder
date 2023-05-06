import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '34749443-1e34e441e5610bb05b56b6169';

export const imagesPerPage = 12;

export const fetchImages = async (searchText, page) => {
  const res = await axios.get('', {
    params: {
      key: KEY,
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: imagesPerPage,
    },
  });

  return res.data;
};