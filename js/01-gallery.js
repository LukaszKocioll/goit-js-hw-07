import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
      </a>
    </div>
  `;
}

const galleryHtml = galleryItems.map(item => createGalleryItem(item)).join('');
galleryContainer.innerHTML = galleryHtml;

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  const clickedElement = event.target;

  if (clickedElement.classList.contains('gallery__image')) {
    const source = clickedElement.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${source}" alt="${clickedElement.alt}">
    `);

    instance.show();
  }
});
