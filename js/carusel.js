import "swiper/css";
import loadPhotos from "./images";

import { Swiper } from "../node_modules/swiper/swiper-bundle.esm.browser";



const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,

  // mousewheel: {
  //  sensitivity:1,
  // },
});

const buildCarousel = () => {
  const callback = function (fotos) {
    fotos.photos.forEach((photoUrl) => {
      let div = document.createElement("div");
      div.className = "swiper-slide";
      let img = document.createElement("img");
      img.src = `photos/photoshome/${photoUrl}`;
      div.appendChild(img);
      swiper.appendSlide(div);
    });
  };

  loadPhotos(callback, "/photoshome");
  // loadPhotos(callback,'/foto1');
};

export default buildCarousel;
