const axios = require('axios').default;
import Notiflix from 'notiflix';

import { fetchPhotos } from './js/fetchPhotos';
import { renderMarkup } from './js/renderMarkup';

const form = document.querySelector('.search-form');
const input = document.querySelector('input');
const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let pageNumber = 1;
loadMoreBtn.style.display = 'none';
let searchValue = '';

form.addEventListener('submit', onSubmitSearch);
loadMoreBtn.addEventListener('click', onClickGetMorePhotos);

function onSubmitSearch(evt) {
  evt.preventDefault();
  clearMarkup();
  searchValue = input.value.trim();
  console.log(searchValue);
  if (searchValue !== '') {
    fetchPhotos(searchValue, pageNumber).then(data => {
      if (data.totalHits === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        galleryContainer.innerHTML = renderMarkup(data.hits);
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        if (data.totalHits > 40) {
          loadMoreBtn.style.display = 'block';
        }
      }
    });
  }
}

function onClickGetMorePhotos() {
  searchValue = input.value.trim();
  pageNumber += 1;
  fetchPhotos(searchValue, pageNumber).then(data => {
    galleryContainer.insertAdjacentHTML('beforeend', renderMarkup(data.hits));
    if (data.hits.length < 40) {
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
      loadMoreBtn.style.display = 'none';
    }
  });
}

function clearMarkup() {
  galleryContainer.innerHTML = '';
  pageNumber = 1;
  loadMoreBtn.style.display = 'none';
}

//if (data.totalHits > 0 && data.totalHits < 40) {
//   Notiflix.Notify.info(
//     "We're sorry, but you've reached the end of search results."
//   );
// } else {
//     loadMoreBtn.style.display = 'block';
// }

// async function getPhotos() {
//   try {
//     const response = await axios.get(
//       'https://pixabay.com/api/?key=30769395-e644794823576604d31051598&q=qwe&image_type=photo&orientation=horizontal&safesearch=true'
//     );
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getPhotos();
