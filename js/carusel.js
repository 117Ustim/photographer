import "swiper/css";
import loadPhotos from "./images";

import { Swiper } from "../node_modules/swiper/swiper-bundle.esm.browser";

document.querySelector(".portfoliophoto").hidden = true;
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
});

const buildCarousel = () => {
  const callback = function (fotos) {
    fotos.photos.forEach((photoUrl) => {
      let div = document.createElement("div");
      div.className = "swiper-slide";
      let img = document.createElement("img");
      img.src = `photos/${photoUrl}`;
      div.appendChild(img);
      swiper.appendSlide(div);
    });
  };

  loadPhotos(callback, "/photos?category=home");
};

export default buildCarousel;
