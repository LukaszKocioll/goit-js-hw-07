import { galleryItems } from './gallery-items.js';



const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

const galleryHtml = galleryItems.map(item => createGalleryItem(item)).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryHtml);

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
  });
});
