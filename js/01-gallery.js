import { galleryItems } from './gallery-items.js'
import * as basicLightbox from './basicLightbox.min.js'

// Change code below this line
function createGallery(items) {
    return items.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`
    ).join('');
    
}

const galleryItemBox = createGallery(galleryItems);
const galleryBox = document.querySelector('.gallery');
galleryBox.addEventListener('click', onViewFullImage);

galleryBox.insertAdjacentHTML('afterbegin', galleryItemBox);

function onViewFullImage(evt) {
    evt.preventDefault();
    const sourceClickedItem = evt.target.dataset.source;

    basicLightbox.create(`${sourceClickedItem}`).show();
    window.addEventListener('keydown', onClickEsc);

}

function onClickEsc(evt) {    
    const ESCAPE = 'Escape'
    const keyClicked = evt.key;
    if (keyClicked === ESCAPE) {
        basicLightbox.close();
        window.removeEventListener('keydown', onClickEsc);
    }    
}
