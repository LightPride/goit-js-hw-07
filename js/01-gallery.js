import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryOfImages = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryOfImages.insertAdjacentHTML("beforeend", markup);

galleryOfImages.addEventListener("click", onGalleryOfImagesClick);

function onGalleryOfImagesClick(event) {
  event.preventDefault();
  if (!event.target.dataset.source) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  console.log(event.target);
  const visible = instance.visible();
  if (visible) {
    window.addEventListener("keydown", onKeyPress);
  }
  function onKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
