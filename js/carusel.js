import $ from 'jquery';
import 'swiper/css';
import loadPhotos from './images';

import { Swiper } from '../node_modules/swiper/swiper-bundle.esm.browser';

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buildCarousel = () => {
  loadPhotos(function (data) {
    data.photos.forEach(photoUrl => {
      let div = document.createElement("div");
      div.className = "swiper-slide";
      let img = document.createElement("img");
      img.src = `photos/${photoUrl}`;
      div.appendChild(img);
      swiper.appendSlide(div);
    })
  });
}

export default buildCarousel;
