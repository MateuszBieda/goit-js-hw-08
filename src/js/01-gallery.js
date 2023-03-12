// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const list = galleryItems.map((image)=> 
`<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt="${image.description}"
    />
  </a>
</div>`).join(" ");

//console.log(galeryItems);
gallery.insertAdjacentHTML('beforeend', list);

let galleryList=  new SimpleLightbox('.gallery a',{captions: true, captionDelay:250, captionPosition:'bottom',captionType:'attr', captionsData:'alt',captionSelector:'img' } );
galleryList.next();