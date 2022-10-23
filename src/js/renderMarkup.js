const galleryContainer = document.querySelector('.gallery');

export function renderMarkup(arr) {
  return arr
    .map(photo => {
      return `<div class="photo-card">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${photo.comments}</b>
    </p>
  </div>
</div>`;
    })
    .join('');
}

// export function clearMarkup() {
//   galleryContainer.innerHTML = '';
//   pageNumber = 1;
//   loadMoreBtn.style.display = 'none';
// }
