import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.dataset.source = item.original;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryContainer.appendChild(galleryItem);
});

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
