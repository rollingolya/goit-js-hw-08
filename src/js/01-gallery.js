// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galerryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

// Створюю розмітку html
function createGalleryItemsMarkup(items) {
    return items
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `;
    })
      .join("");
}

function renderMarkup(markup) {
	galerryContainer.insertAdjacentHTML('beforeend', markup);
}

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
renderMarkup(galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: "bottom",
    captionsData: "alt",
      captionDelay: 250,
    
  });

// galerryContainer.addEventListener('click', onGalleryModalClick);

// function onGalleryModalClick(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width = "800" height = "600">`
// );

//   instance.show();

//   instance.element().querySelector('img').src = evt.target.dataset.source;
// };


// function onEsc(evt) {
//   if (evt.code === 'Escape') {
//     instance.close();
//   }
// }

