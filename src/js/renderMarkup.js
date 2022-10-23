const galleryContainer = document.querySelector('.gallery');

export function renderMarkup(arr) {
  return arr
    .map(photo => {
      return `<div class="photo-card">
  <a href="${photo.largeImageURL}"><img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" width = "300" height ="200"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${photo.likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${photo.views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${photo.comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${photo.comments}
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
