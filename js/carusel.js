import 'swiper/css';
import { Swiper } from '../node_modules/swiper/swiper-bundle.esm.browser';
import getImages from './images';

let swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buildCarousel = () => {
  const images = getImages();

  for (let i = 0; i < images.length; i++) {
    let div = document.createElement("div");
    div.className = "swiper-slide";
    let img = document.createElement("img");
    img.src = images[i];
    div.appendChild(img);
    swiper.appendSlide(div);
  }
}

export default buildCarousel;
