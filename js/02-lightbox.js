import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGallery(items) {
    return items.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    ).join('');    
}

const galleryItemBox = createGallery(galleryItems);
const galleryBox = document.querySelector('.gallery');

galleryBox.insertAdjacentHTML('afterbegin', galleryItemBox);

const $lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});
