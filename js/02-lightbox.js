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
let basicLightboxEl;

galleryBox.addEventListener('click', onViewFullImage);

galleryBox.insertAdjacentHTML('afterbegin', galleryItemBox);

function onViewFullImage(evt) {
    evt.preventDefault();

    const isImgTeg = evt.target.nodeName === 'IMG';
    // const isImgTeg = evt.target.classList.contains('gallery__image');

    if (!isImgTeg) {
        return
    }

    const sourceClickedItem = evt.target.closest('.gallery__link').href;
    const descriptionImg = evt.target.alt;    

    basicLightboxEl = basicLightbox.create(`
            <img
                src="${sourceClickedItem}"
                alt="${descriptionImg}"             
            />        
        `);
    basicLightboxEl.show();

    window.addEventListener('keydown', onClickEsc);
}

function onClickEsc(evt) {    
    const ESCAPE = 'Escape'
    const keyClicked = evt.key;

    if (keyClicked === ESCAPE) {
        basicLightboxEl.close();

        window.removeEventListener('keydown', onClickEsc);
    }    
}
