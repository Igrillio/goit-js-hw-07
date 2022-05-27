import { galleryItems } from './gallery-items.js';
// Change code below this line
let instance 
const list = document.querySelector(".gallery");

function markup() {
return galleryItems.map((imageAdd) => `<div class="gallery__item">
  <a class="gallery__link" href=${imageAdd.original}>
    <img
      class="gallery__image"
      src ="${imageAdd.preview}"
      data-source ="${imageAdd.original}"
      alt ="${imageAdd.description}"
      />
  </a>
</div>`)
  .join("");
}
list.insertAdjacentHTML("afterbegin", markup(galleryItems));

console.log(galleryItems);
list.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);

  instance.show();
}

