import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from './basicLightbox.min.js';

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
let basicLightboxEl;

galleryBox.insertAdjacentHTML('afterbegin', galleryItemBox);

galleryBox.addEventListener('click', onViewFullImage);

function onViewFullImage(evt) {
    evt.preventDefault();

    // const isImgTeg = evt.target.nodeName === 'IMG';
    const isImgTeg = evt.target.classList.contains('gallery__image');

    if (!isImgTeg) {
        return
    }

    const sourceClickedItem = evt.target.dataset.source;
    const descriptionImg = evt.target.alt;    

    basicLightboxEl = basicLightbox.create(`
            <img
                src="${sourceClickedItem}"
                alt="${descriptionImg}"             
            />        
        `, {
        onClose: (instance) => {
            window.removeEventListener('keydown', onClickEsc); 
        },
        onShow: (instance) => {
            window.addEventListener('keydown', onClickEsc);
        }    
        });
    basicLightboxEl.show();    
}

function onClickEsc(evt) {    
    const ESCAPE = 'Escape'
    const keyClicked = evt.key;

    if (keyClicked === ESCAPE) {
        basicLightboxEl.close()        
    }    
}
