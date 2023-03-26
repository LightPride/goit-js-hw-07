import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryOfImages = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join("");

galleryOfImages.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
